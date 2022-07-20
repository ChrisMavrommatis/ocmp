---
title			: Basic GA4 Tag Manager Setup
permalink		: /google-tag-manager-guides/basic-ga4-tag-manager-setup
nav_order		: 3
parent			: Google Tag Manager Guides
---

*[GTM]: Google Tag Manager
*[GA4]: Google Analytics 4
*[GDPR]: General Data Protection Regulation

# Basic GA4 Tag Manager Setup

This guide will walk you through setting up a Tag Manager container for use with GA4. This is the most basic setup to familiarize yourself with Tag Manager, as it doesn't cover Ecommerce setup or UserID, because both of those do require you to add Javascript code to your site.

However with that beeing said, if all you care is page views, this basic setup will cover your needs.

This guide assumes you have already created a Tag Manager account and Container and know the basics of Tag Manager. If not, follow the guides below first.

- [Creating a Tag Manager Account and Container]({{ site.baseurl }}{% link pages/google-tag-manager-guides/creating-a-tag-manager-account-and-container.md %})
- [Tag Manager Intro]({{ site.baseurl }}{% link pages/google-tag-manager-guides/tag-manager-intro.md %})

This guide also assumes you know how to open up a GA4 account and have already set it up and have the Measurement ID.

----

## Creating the Google Analytics 4 Configuration Tag

From the Container's home screen, locate the side menu and click on **Tags**. It should bring you to the Tags list screen.

![Tags landing page]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step01-Tags.png' | relative_url }})

Then, on the upper right corner within the _Tags whitespace_, click **New**. A panel should appear.

![Create a new tag]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step02-NewTag.png' | relative_url }})

First, give your tag a descriptive name to easily distinguish it, such as `GA4`.

![Name the new tag]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step03-NameNewTag.png' | relative_url }})

Then click on the grey circle or anywhere within the _**Tag Configuration whitespace**_, and another panel should pop up and prompt you to choose the Tag type.

![Tag configuration selection]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step04-TagConfigurationSelection.png' | relative_url }})

Click on **Google Analytics: GA4 Configuration** to select it. It should return you to the previous panel with the Tag type you selected.

This is where we will configure our Tag. We need to put in the measurement ID we got when creating and setting up GA4.

![Google Analytics 4 Tag Configuration]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step05-GA4Configuration.png' | relative_url }})

You can enter it here like it is, but it's much more preferable to have it in a variable instead.

Click on the **toy brick shaped icon with the plus sign** and another panel should open up, allowing you to choose a variable.

![Measurement ID Variable Creation, Step 1]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-01.png' | relative_url }})

We don't want to choose an existing variable but create, so hit the **plus icon** on the top right of the screen to create one. Another panel should appear.

![Measurement ID Variable Creation, Step 2]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-02.png' | relative_url }})

Give the variable a memorable name such as `GA4 Measurement ID`

![Measurement ID Variable Creation, Step 3]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-03.png' | relative_url }})

Then click on the _**Variable Configuration whitespace**_ and another panel should show up.

![Measurement ID Variable Creation, Step 4]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-04.png' | relative_url }})

Scroll down until you find the **Constant**, which is under the _Utilities_.

![Measurement ID Variable Creation, Step 5]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-05.png' | relative_url }})

Click on it to select it.

![Measurement ID Variable Creation, Step 6]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-06.png' | relative_url }})

Within the **Value** text box paste the Measurement ID, then click **save**.

![Measurement ID Variable Creation, Step 7]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-07.png' | relative_url }})

After clicking save you will be brought back to the Tag Configuration and have the variable selected for you.

Do notice the double braces, thats how you specify a variable in any field with a brick shaped icon.

![Measurement ID Variable Creation, Step 8]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableCreation-08.png' | relative_url }})

For example if you have created a variable beforehand, then you could type {% raw %}`{{`{% endraw %} and Tag Manager will open an autocomplete field allowing you to choose from the variables you already have.

![Measurement ID Variable Selection]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step06-GA4_MeasurementIDVariableSelection.png' | relative_url }})

Leave the _Send a page view event when this configuration loads_ checked and the _Send to server container_ unchecked. Then scroll down to the _Triggering_ section.

![Trigger Selection, Step 1]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step07-GA4TriggerSelection-01.png' | relative_url }})

As with the Tag Configuration, click on the grey circle or anywhere within the _**Triggering whitespace**_, and another panel should pop up and prompt you to choose a Trigger.

![Trigger Selection, Step 2]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step08-GA4TriggerSelection-02.png' | relative_url }})

This time we won't create a trigger as there is one build in trigger that works for us. This is the **Initialization - All Pages** trigger, so click on it to select it.

![Trigger Selection, Step 3]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step09-GA4TriggerSelection-03.png' | relative_url }})

That's it we don't have to do anything more, just click on **Save** and your GA4 tag is ready.

![GA4 Finished]({{ '/assets/images/google-tag-manager-guides/basic-tag-manager-setup/Step10-GA4Finish.png' | relative_url }})

All that is left to do is publish your changes so the tag is fired on your site. Publishing is covered in [Tag Manager Intro]({% link pages/google-tag-manager-guides/tag-manager-intro.md %})
