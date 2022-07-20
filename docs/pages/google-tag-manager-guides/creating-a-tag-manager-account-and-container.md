---

title			: Creating a Tag Manager Account and Container
permalink		: /google-tag-manager-guides/creating-a-tag-manager-account-and-container
nav_order		: 1
parent			: Google Tag Manager Guides
---

*[GTM]: Google Tag Manager
*[GA4]: Google Analytics 4
*[GDPR]: General Data Protection Regulation

# Creating a Tag Manager Account and Container

I am imagining you already have a Google account set up for Google Analytics and Search console, those are essential and if you don't, you should make one right now.

We won't focus on how to open a Google account for those services but it's a good practice to keep all those services under one Google account for ease of management. Additionally one account can make it easy to link some services with each other.

Before we begin, it's important to understand that a Google account is different from a Tag Manager account. Within a Google account you can have many Tag Manager Accounts.

A Tag Manager Account can have multiple containers. A container is actually what you add to a website. Usually, you add a container to a single site only.

Additionally, a Tag Manager account can behave like a group for similar sites. It's really useful when you need to add several people and have them manage multiple sites, instead of adding them to the containers directly.

If you have both a live and a staging site, each of them should have a different container but both should belong to the same account.

Likewise if you have a corporate info site and an eshop or a b2b version and those require different setups, each of them should have a different container but they should all belong in the same account.

Visit [tagmanager.google.com](https://tagmanager.google.com), and log in with your Google account.

The following image should depict an empty Tag Manager Account management screen or the Tag Manager home page.

![Empty Account Page]({{ '/assets/images/google-tag-manager-guides/creating-a-tag-manager-account-and-container/001_emtpy_account_page.png' | absolute_url }} "Empty Account Page")

Click on Create Account and the following screen will prompt you to choose an Account name.

As you can see, the name is really the company name. That is why its best to add containers for similar sites, under the same account, or if a company owns multiple sites. It really boils down to separation of user management.

![Account Creation]({{ '/assets/images/google-tag-manager-guides/creating-a-tag-manager-account-and-container/002_account_creation.png' | absolute_url }} "Account Creation")

Below the account setup you are prompted to add a container. Fill in the name of the container, which can be the site itself. You can always change it later and it doesn't really matter what you input in, as long as you can easily distinguish between a container for the live site and the staging one.

Choose Web as the target platform, click Create and agree to the terms.

Once you create the account and container, the site will bring you inside the container's page.

![Container Detail]({{ '/assets/images/google-tag-manager-guides/creating-a-tag-manager-account-and-container/004_container_detail.png' | absolute_url }} "Container Detail")

Visit [tagmanager.google.com](https://tagmanager.google.com) to get an overview.
The image below should depict a Created account and from there you can add more containers.

![Account Overview]({{ '/assets/images/google-tag-manager-guides/creating-a-tag-manager-account-and-container/003_account_overview.png' | absolute_url }} "Account Overview")

If you have a development and a staging site you should create more containers for those as well, but generally its a good idea to start with the development site container first, then create the live one and copy everything over, or use the export/import feature.

Once satisfied you can click the container you like and it will bring you inside its detail page.

![Container Detail]({{ '/assets/images/google-tag-manager-guides/creating-a-tag-manager-account-and-container/004_container_detail.png' | absolute_url }} "Container Detail")

Congratulations, you have created a Tag Manager account and a Container. You can now move forward with the rest of the guides.
