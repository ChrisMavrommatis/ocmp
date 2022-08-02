---
title			: Consent Mode
permalink		: /google-tag-manager-guides/consent-mode
nav_order		: 4
parent			: Google Tag Manager Guides
description		: "This guide will show you around GTM's Consent Mode. This is the key feature that OCMP relies on and makes it work. As such you should become very familiar with it."
---

*[GTM]: Google Tag Manager
*[GA4]: Google Analytics 4
*[GDPR]: General Data Protection Regulation

# Consent Mode

This guide will show you around GTM's Consent Mode. This is the key feature that OCMP relies on and makes it work. As such you should become very familiar with it.
{: .fs-5 .fw-400 }

----

## Prerequisites

This guide assumes you have already created a Tag Manager account and a Container. If not, follow the guide below first.

- [Creating a Tag Manager Account and Container]({{ site.baseurl }}{% link pages/google-tag-manager-guides/creating-a-tag-manager-account-and-container.md %})

----
## Table of Contents
{: .text-delta }

1. [Introduction](#introduction)

## Introduction
{: #introduction }

GTM has a total of 5 consent types, and they are used to control when a tag is fires.

| Consent Type | Description |
| -- | -- |
| ad_storage | Enables storage (such as cookies) related to advertising |
| analytics_storage | Enables storage (such as cookies) related to analytics e.g. visit duration |
| functionality_storage | Enables storage that supports the functionality of the website or app e.g. language settings |
| personalization_storage | Enables storage related to personalization e.g. video recommendations |
| security_storage | Enables storage related to security such as authentication functionality, fraud prevention, and other user protection |

The above table is taken directly from Google's [Consent Configuration](https://support.google.com/tagmanager/answer/10718549?hl=en) article.

That means when you configure a tag with the `analytics_storage` consent type, when that consent type is granted, only then will Tag Manager fire that tag.

## Consent Overview
{: #consent-overview }

TODO
