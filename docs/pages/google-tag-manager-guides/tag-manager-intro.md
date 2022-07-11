---
title			: Tag Manager Intro
permalink		: /google-tag-manager-guides/tag-manager-intro
nav_order		: 2
parent			: Google Tag Manager Guides
---

# Tag Manager Intro

Since OCMP relies on Tag Manager you should realy understand what Tag Manager is, what can it do and how you can do all those things.

This guide assumes you have already created a Tag Manager account and a Container. If not follow the guide below first.

- [Creating a Tag Manager Account and Container]({% link pages/google-tag-manager-guides/creating-a-tag-manager-account-and-container.md %})

## Table of Contents
{: .text-delta }

1. [Tags](#google-tag-manager)

## Tags

Tags are actually what is injected into your site.
The contents of each tag can vary, but in a sence you can inject html into your site and with it you can even inject css and javascript too.

If you need to inject a piece of html code you can do it.
If you need to add Google Analytics, guess what? There is build in support for that and many other Google services as well as 3rd party ones.
If you don't want to use the build in the you can use custom html and have it get injected instead.

There are some limitations to this however. From experimentation you cannot inject anything you want.

First of all the html you want to inject must be valid and not all html tags are supported, for example you cannot inject svg html tags.
Then the attributes of the html tags must be valid and not all can be injected, for example you cannot inject VueJs attributes (v-for, v-if... etc).
Finally the javascript you intend to inject must be valid and in ES2015 syntax.
