#!/bin/bash
country="GR"
rootCA="Localhost-Root-CA"
organization="Localhost-Certificates"
commonName="localhost"

rootCAKey="tools/certificate_generation/tmp/RootCA.key"
rootCAPem="tools/certificate_generation/tmp/RootCA.pem"
rootCACrt="tools/certificate_generation/tmp/RootCA.crt"
localhostKey="tools/certificate_generation/tmp/localhost.key"
localhostCsr="tools/certificate_generation/tmp/localhost.csr"
domains="tools/certificate_generation/domains.ext"
localhostCrt="tools/certificate_generation/tmp/localhost.crt"

openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout $rootCAKey -out $rootCAPem -subj "/C=$country/CN=$rootCA"
openssl x509 -outform pem -in $rootCAPem -out $rootCACrt
openssl req -new -nodes -newkey rsa:2048 -keyout $localhostKey -out $localhostCsr -subj "/C=$country/O=$organization/CN=$commonName"
openssl x509 -req -sha256 -days 1024 -in $localhostCsr -CA $rootCAPem -CAkey $rootCAKey -CAcreateserial -extfile $domains -out $localhostCrt

cp $localhostCrt docs/_ssl/
cp $localhostKey docs/_ssl/
