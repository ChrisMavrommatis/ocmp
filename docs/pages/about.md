---
title			: About OCMP
permalink		: /about
nav_order		: 2
description 	: "OCMP is best suited for static sites that are built with static site generators like Jekyll, however, this should not discourage you from using it even if your site is not statically generated. Read below and find out if OCMP is the right fit for your site."
---

*[GTM]: Google Tag Manager
*[GA4]: Google Analytics 4
*[GDPR]: General Data Protection Regulation

# About OCMP

OCMP is best suited for static sites that are built with static site generators like Jekyll, however, this should not discourage you from using it even if your site is not statically generated. Read below and find out if OCMP is the right fit for your site.
{: .fs-5 .fw-400 }

----

## Table of Contents
{: .text-delta }

1. [Google Tag Manager](#google-tag-manager)
2. [GDPR](#gdpr)
3. [Transparency](#transparency)
4. [OCMP Structure](#ocmp-structure)

## Google Tag Manager
{: #google-tag-manager }

OCMP is built around GTM and uses its consent feature that is currently in beta.

It is possible to add OCMP to a site without even touching the site's source code. To achieve that, the site must already have the GTM script and have no other scripts that need consent.

Admittedly a new site, specifically one that is statically generated with a tool such as jekyll, will benefit more from such a setup.

Additionally, OCMP relies on Tag Manager for handling the consent and firing the appropriate tags. That means that when a user updates their consent and allows the analytics consent, for example, it sends a message to the Tag Manager, and it's the Tag Manager that runs or fires the tags that require analytics consent.

### Why GTM?
{: #why-gtm }

GTM is a powerful platform and at its simplest, it allows you to dynamically inject content into your site. It has built-in integrations with almost all of Google's services, as well as other 3rd party services.

For example, you might want to set up GA4 on your site. That will require you to add the GA4 script to your site. Then later you might decide to add Google Remarketing, that too will require you to add another script.

This is where Tag Manager comes in and by including its script, it gives you a platform to add those other scripts (tags) to your site without you editing the source code.
If you explore Tag Manager you will soon find you can add tags based on complex conditions and not just on every page load. Static sites can benefit even more from this feature.

----

## GDPR
{: #gdpr }

OCMP tries its best to stick as closely to the European GDPR and ePrivacy directive as it can. However, since this is the work of a single person without a legal background, this project and software come with no warranty whatsoever.

It has four consent categories, as suggested by GDPR, and it maps them to the six offered by GTM.

The table below lists the relationship between GTM, OCMP and its GDPR equivalent.

| GTM Storage | OCMP Consent | GDPR Purpose |
| -- | -- | -- |
| Essential Storage | Strictly Necessary | Strictly necessary cookies |
| Security Storage | Strictly Necessary | Strictly necessary cookies |
| Functionality Storage | Preferences & Functionality | Preferences cookies |
| Personalization Storage | Preferences & Functionality | Preferences cookies |
| Analytics Storage | Statistics & Performance | Statistics cookies |
| Ad Storage | Marketing & Advertising | Marketing cookies |

OCMP does not give you the ability to change those four consents or the GTM mapping through OCMP Data. You can only do that if you change the source code.

----

## Transparency
{: #transparency }

OCMP is built with transparency in mind. This project and software aim to make it as clear as possible on how it works and what its features are, so people can decide for themselves if OCMP is the right fit for their site.

OCMP also aims to be a free and open-source project for everyone to use. It shouldn't matter if you want to use it on your blog or for a nonprofit organization's website or even on your online shop. All that OCMP asks is that it, and any modification to it, will always remain open source, even if your project is not.

OCMP is not a product for sale, as such I want to avoid marketing terms that lure you into a false perception that this is the only and best solution for you.
I understand OCMP is not for everyone and it will never become one.

----

## OCMP Structure
{: #ocmp-structure }

Before you get started with OCMP, you should learn what it really is and how it is structured.

OCMP at its simplest consists of the following 4 parts.

1. CSS Styling (`css`)
2. HTML Markup (`html`)
3. Core OCMP Code (`js`)
4. OCMP Data (`data`)

### Source Package
{: #source-package }

Within the source package, you should find the above 4 folders.

The `css` folder will contain `ocmp.css` and `ocmp.min.css` [^1] which is the styling that makes OCMP look how it does.

The `html` folder will contain the `ocmp.html` file which is all the html markup OCMP needs. The markup has 4 components: the bar, the modal, the floating button and the blocking layer, which I called required.

The `js` folder will contain `ocmp.js` and `ocmp.min.js` [^1] which is the core code of OCMP.

The `data` folder will contain various `.js` files each with a language code as their name.
These files are called the OCMP data files and contain the official sample data in various languages. OCMP data is what loads up the text data into OCMP, configures and instructs it to run.

You can take an OCMP data file and translate it to your language or change it to display the messages you want to display. At the end of the day, the OCMP data files just contain enough sample data to give you a direction and get you started.

If you have a multilingual site you should only take care in loading the correct OCMP data file for that language. The first 3 files are to be loaded in all languages.

The numbers listed above are the order of which the OCMP files should be loaded.

### GTM Package
{: #gtm-package }

Within the GTM package you should find the following.

- The `ocmp.html` and `ocmp.min.html` [^1] which is the raw html to be used inside a Custom Html tag. This includes the inline `css`, `html` and inline `js` from the source package. You can open this file and copy-paste its contents directly inside a Custom Html tag without any modification.

- The `ocmp_data.tpl` which is a Tag Template for Tag Manager. You can use this to create a custom Tag Template, which will provide an interface for data entry within Tag Manager.

----

## Footnotes
{: #footnotes}

[^1]: A `.min` file is what we call a minified file which is the same as the non-minified. Their only difference is their sizes, as minified files have all the whitespaces removed and possible optimizations to save on file size. You really should use the minified file on a production site.
