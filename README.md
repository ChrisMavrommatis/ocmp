# OCMP Consent Management Platform

## Introduction
OCMP is a free and open source project that provides a transparent way of managing consent.
This project is mostly aimed towards static sites that are build with static site generators like Jekyll.

For direnctions on how to use OCMP and its features refer to the documentation.

----

## Local project setup

Follow the instructions below to set up the project locally.
Be warned that a few tools such as cleanup node commands and the certificate generation rely on linux commands and won't run on windows.

### Prerequisites

To set the project localy you need to have [nodejs](https://nodejs.org/en/download/) installed on your system.

Then you need to have [gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) installed.

Theese two are used for tooling and building the source files for OCMP.

If you need to run or build the docs locally then you need to install [jekyll](https://jekyllrb.com/docs/).
Jekyll does rely on ruby but jekyll's documentation covers its own dependencies.

Some tooling used in the project assumes that is run on a Linux environment. Those that do, will have a *(Linux Only)* indication.

----

## Getting to know the tooling

I've purposely used node and gulp to unify all the tooling required.
package.json describes all the scripts used by the project.
All commands are issued from the project's root directory.

### Main Commands
There are the main commands your are going to need.

- `npm run install-all` will install the node modules and the ruby bundles for the docs. if you need to only build the source then you can run `npm install`.

- `npm run generate-ssl` *(Linux Only)* will generate the ssl certificates for running the docs with https loccaly. After you generate the certificates you need to install the `localhost.crt` found in `docs/_ssl` to your browser.

- `npm run watch` will create a watch task for local development, so you won't have to build everything over and over.

- `npm run serve` will clean the docs, build, then and run jekyll in ssl. If you find trouble with it change the command `serve` in `package.json` to use the non ssl jekyll serve ie from `npm run jekyll-serve-docs-ssl` to `npm run jekyll-serve-docs`.

- `npm run uninstall-all` *(Linux Only)* will run `clean-node`, `clean-dist` and `clean-jekyll`.

- todo build src & release

### Secondary commands

These commands are mainly used internally withing the main ones.

- `npm run jekyll-serve-docs` will serve jekyll locally.
- `npm run jekyll-serve-docs-ssl` as above but with certificates for https support.
- `npm run gulp-build-docs-src` will build the docs. Used by `serve`.
- `npm run clean-docs` *(Linux Only)* will clean the `docs/css` and `docs/js`.
- `npm run clean-jekyll` *(Linux Only)* will run `clean-docs`, delete `.dev` and remove `Gemfile.lock`.
- `npm run clean-node` *(Linux Only)* will remove the `node_modules` folder and delete `package-lock.json`
- `npm run clean-dist` *(Linux Only)* will clean the entire contents of `dist` folder.

----

## Folders

- `src` contains the OCMP source code files.
- `docs` contains the documentation site source files.
- `tools` contains various tools used in the project. Mainly for aiding in building or local development.
- `dist` will contain the OCMP files when built from source.
- `.dev` will contain files for use in local development.
- `docs/css` & `docs/js` always contain dynamically generated css and js files.



