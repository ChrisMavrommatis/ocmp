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

This guide assumes you have already created a Tag Manager account, a Container and already setup GA4 on it. If not, follow the guides below first.

- [Creating a Tag Manager Account and Container]({{ site.baseurl }}{% link pages/google-tag-manager-guides/creating-a-tag-manager-account-and-container.md %})
- [Tag Manager Intro]({{ site.baseurl }}{% link pages/google-tag-manager-guides/tag-manager-intro.md %})
- [Basic GA4 Tag Manager Setup]({{ site.baseurl }}{% link pages/google-tag-manager-guides/basic-ga4-tag-manager-setup.md %})

----
## Table of Contents
{: .text-delta }

1. [Introduction](#introduction)
2. [Consent Configuration](#consent-configuration)
3. [Configuring Consent for GA4](#configuring-consent-for-ga4)
4. [Consent Overview](#consent-overview)

## Introduction
{: #introduction }

GTM has a total of 7 consent types, and they are used to control when a tag is fires.

| Consent Type | Description |
| -- | -- |
| ad_storage | Enables storage (such as cookies) related to advertising |
| analytics_storage | Enables storage (such as cookies) related to analytics e.g. visit duration |
| functionality_storage | Enables storage that supports the functionality of the website or app e.g. language settings |
| personalization_storage | Enables storage related to personalization e.g. video recommendations |
| security_storage | Enables storage related to security such as authentication functionality, fraud prevention, and other user protection |
| ad_user_data | Sets consent for sending user data to Google for advertising purposes. |
| ad_personalization | Sets consent for personalized advertising. |

The above table is taken directly from Google's [Consent Configuration](https://support.google.com/tagmanager/answer/10718549?hl=en){:target="_blank"} article.

That means when you configure a tag with the `analytics_storage` consent type, when that consent type is granted, only then will Tag Manager fire that tag.

## Consent Configuration
{: #consent-configuration }

By default Consent Mode is turned off for all tags and you need to turn it on.

To enable it you must enable the *Consent Overview* feature. How you do this is also covered in the article below.

Once you enable it, you do so for your entire container, so be sure to review what tags need which consent and have a solution compatible with Google's consent mode in place... such as [OCMP](https://chrismavrommatis.github.io/ocmp/)!

Read the following article and enable the _Consent Overview_ then return here to follow along with editing the GA4 tag.

[Consent Configuration](https://support.google.com/tagmanager/answer/10718549?hl=en){:target="_blank"}

## Configuring Consent for GA4
{: #configuring-consent-for-ga4 }

We are going to use the GA4 tag created in [Basic GA4 Tag Manager Setup]({{ site.baseurl }}{% link pages/google-tag-manager-guides/basic-ga4-tag-manager-setup.md %}) to configure the consent mode for this example.

Navigate to your tags and click on the GA4 Config tag to edit it.

![Opening GA4 Tag]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step01-OpenGA4Tag.png' | relative_url }})

Now click on the _Tag Configuration_ area to expand it and be able to edit it.

![Editing GA4 Tag]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step02-EditGA4Tag.png' | relative_url }})

Locate the _Advanced Settings_ item and expand it then locate the _Consent Settings_.

![Expand Advenced and Located Consent Settings]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step03-ExpandAdvancedAndLocateConsentSettings.png' | relative_url }})

Here you should see the Built-In Consent Checks the tag uses and below it you shopuld see the consent check configured for that tag.

![Configure Consent]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step04-ConfigureConsent.png' | relative_url }})

There are 3 options

- **Not Set** is for when you have not reviewed the consents for this tag (Will still check the built-in consents and fire once Consent Mode is enabled).
- **No Additional consent required** means you have reviewed the tag and you decided you are ok with the built-in consents.
- **Require additional consent for tag to fire** is where you add consents for a tag that already has some built-in or none at all.

Once satisfied click out of the area but within the panel to see the consents that are now configured in the tag.

![Click away to see changes]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step05-ClickAwayToSeeChanges.png' | relative_url }})

Save the changes and return to the Tags screen.

# Consent Overview
{: #consent-overview }

![Tags landing page]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step06-ReturnToTagsToLocateConsentOverviewButton.png' | relative_url }})

From the Tags screen, as shown in the image above, you should locate the _Consent Overview_ button.

It is next to the _New_ button on the upper right and looks like a shield with a checkmark.

Click on it to open the _Consent Overview_ Panel

![Consent Overview]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step07-OpenConsentOverview.png' | relative_url }})

Here you can see for which tags you have configured consent for and which not, as well as the built-in and additional consents for all the tags in your container.

The previous image should show how your GA4 tag would look like with consent configured, whereas the following image should show how a GA4 tag would look like without configuring the consent.

![Consent overview with uncofigured consent for tags]({{ '/assets/images/google-tag-manager-guides/consent-mode/Step08-ConsentOverview_ConsentNotConfigured.png' | relative_url }})

---

If you followed along you should have created a GA4 tag with consent mode configured.

Now all that is left is to add OCMP and you will be good to go.
