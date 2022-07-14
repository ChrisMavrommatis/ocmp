---
title			: Tag Manager Intro
permalink		: /google-tag-manager-guides/tag-manager-intro
nav_order		: 2
parent			: Google Tag Manager Guides
---

# Tag Manager Intro

Since OCMP relies on Tag Manager you should really understand what Tag Manager is, what it can do and how you can do all those things.

This guide assumes you have already created a Tag Manager account and a Container. If not, follow the guide below first.

- [Creating a Tag Manager Account and Container]({% link pages/google-tag-manager-guides/creating-a-tag-manager-account-and-container.md %})

----
## Table of Contents
{: .text-delta }

1. [Tags](#tags)
2. [Triggers](#triggers)
3. [Variables](#variables)

The following image depicts an empty container you've just created. We will go through each of the basic section you need to know to get started. We won't be covering advanced sections or menu items here.

![Container Landing Screen]({{ '/assets/images/google-tag-manager-guides/tag-manager-intro/container-landing-screen.png' | absolute_url }} "Container Landing Screen")

## Tags
{: #tags }

Tags are actually what is injected into your site.
The contents of each tag can vary, but in a sense you can inject html into your site and with it, you can even inject css and javascript too.

If you need to inject a piece of html code you can do it.

If you need to add Google Analytics, guess what? There is built- in support for that and many other Google services as well as 3rd party ones.

If you don't want to use the built- in Analytics, then you can use a custom html and make it yourself.

There are some limitations to this however. From experimentation you cannot inject anything you want.

First of all the html you want to inject must be valid and not all html tags are supported, for example you cannot inject svg html tags.
The attributes of the html tags must be valid and not all can be injected, for example you cannot inject VueJs attributes (v-for, v-if... etc).
Finally the javascript you intend to inject must be valid and in ES2015 syntax.
If you have any error Tag Manager will simply not allow you to publish your changes to the container _[[1](#note-1)]_{: .text-delta }.

Finally all Tags must have at least one Trigger.

## Triggers
{: #triggers }

Tags need at least one Trigger to work. Triggers are what, as the name suggests, trigger the Tags.

There are many build in triggers such as the "DOM Ready" trigger which is when the DOM has finished loading _[[2](#note-2)]_{: .text-delta }.

For example you can use the above trigger to inject a custom piece of HTML into your site.

Triggers also take parameters and can fire conditionally. For example you can configure the above trigger so it only fires when the page is in english so you can inject an english html only code into your site.

You can also utilize custom Javascript events for your triggers.

## Variables
{: #variables }

Variables add in to Tag Manager and can be really useful for advanced setups. However even simple setups can benefit from them.

For example you can make a custom constant variable for the analytics property and use that variable, instead of having to write it all over the place. That way if the analytics property changes, then you only have to change it in one place.

Variables can be dynamic and can be used in Triggers to give them real functionality.

For example you can make a DOM Element variable for the `<html>` element and have it look at the `lang` attribute to determine the language of the page.

There are also many build in variables such as the the Page URL, which you can use to fire a Trigger only when a user visits a specific page in your site.

----

## Notes
{: #notes}

### Note 1
{: #note-1 .text-delta }

Publishing is the act of applying the changes to your container. This is covered in [Basic Tag Manager Setup]({% link pages/google-tag-manager-guides/basic-tag-manager-setup.md %})

### Note 2
{: #note-2 .text-delta }
DOM stands for Document Object Model and the DOM Ready event means that the browser has rendered all the HTML elements and its values can be accessed. However that doesn't mean the page has fully loaded.
