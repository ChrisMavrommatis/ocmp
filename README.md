# OCMP Consent Management Platform

OCMP is a free and open source and provides a transparent way of managing consent.
This project is mostly aimed towards static sites that are build with static site generators like Jekyll.

## GTM Based

Currently it is built around Google's Tag Manager (GTM) consent feature that is in beta.
GTM can inject almost any content into a site as well as connect it with analytics.
A site having GTM can easily benefit from this consent feature.
GTM tags can be configured to be fired when the user has given consent of a specific category or categories.

OCMP leverages GTM's native consent system and provides the functionality and the UI to the user.

If your site already has scripts not managed by GTM then a migration to GTM will be required for those scrips.
There are plans to add that functionality at a later date so those that don't want to rely to GTM won't have to and can just easily remove the code.

## OCMP's best feature
OCMP's best feature is its ability to integrate it fully from within GTM.
That's right you won't have to touch your site's code at all!*

**Provided you already have GTM added to the site and all other scripts/tags are managed by GTM.*

Additionally instructions on how to set it up solely from within GTM are given so virtually anyone could potentially follow them.

Do note that in my line of work most people tend to avoid GTM because it requires a lot of digging.
However I do akcnowledge the previous and I aim to provide a comprehensive documentation so it can be more accessible to non developers as well, as a site that has been setup properly with GTM has a lot of potential.

