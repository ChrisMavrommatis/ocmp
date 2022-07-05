---
title			: About OCMP
permalink		: /about
nav_order		: 2
---

# About OCMP

OCMP is a recursive acronym for "OCMP Consent Management Platform" and is a free and open source project that provides a transparent way of managing consent.
This project is mostly aimed towards static sites that are built with static site generators like Jekyll.

## Table of Contents
{: .text-delta }

1. [Google Tag Manager](#google-tag-manager)
2. [GDPR](#gdpr)
3. [OCMP Structure](#ocmp-structure)

----

## Google Tag Manager
{: #google-tag-manager }

OCMP is built around Google's Tag Manager (GTM) and uses its consent feature that is currently in beta.

It is possible to add OCMP to a site without even touching the site's source code. To achieve that the site must already have GTM's script and have no other scripts that need consent.

Admitedly a new site, specifically one that is statically generated with a tool such as jekyll, will benefit more from such a setup.

----

## GDPR
{: #gdpr }

OCMP tries its best to stick as closely to the European GDPR and ePrivacy directive as it can. However since this is the work of a single person without a legal background, this project and software comes with no warranty whatsoever.

----

## OCMP Structure
{: #ocmp-structure }

Before you get started with OCMP, you should learn what it really is and how it is structured.

OCMP at its simplest is comprised of the following 4 parts.

1. CSS Styling (`css`)
2. HTML Markup (`html`)
3. Core OCMP Code (`js`)
4. OCMP Data (`data`)

Within the package source you should find the above 4 folders.

The `css` folder will contain `ocmp.css` and `ocmp.min.css` _[[1](#note-1)]_{: .text-delta } which is the styling that makes OCMP look how it does.

The `html` folder will contain the `ocmp.html` file which is all the html markup OCMP needs. The markup has 4 components: the bar, the modal, the floating button and the blocking layer, which I called required.

The `js` folder will contain `ocmp.js` and `ocmp.min.js` _[[1](#note-1)]_{: .text-delta } which is the core code of OCMP.

The `data` folder will contain various `.js` files each with a language code as their name.
Theese files are called the OCMP data files and contain the official sample data in various languages. OCMP data is what loads up the text data into OCMP, configures and instructs it to run.

You can take an OCMP data file and translate it to your own language or change it to display the messages you want to display. At the end of the day the OCMP data files just contain enough sample data to give you a direction and get you started.

If you have a multilingual site you should only take care in loading the correct OCMP data file for that language. The first 3 files are to be loaded on all languages.

The numbers listed above are the order of how the OCMP files should loaded.

----

## Notes
{: #notes}

### Note 1
{: #note-1 .text-delta }
A `.min` file is what we call a minified file which is the same as the non minified. Their only difference is their sizes, as minified files have all the whitespaces removed and possible optimizations in order to save on file size. You really should use the minified file on a production site.

