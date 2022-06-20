var ocmpData = {
	bar: {
		title: 'Cookie Policy',
		description: 'We use cookies to ensure that we give you the best experience on our website.'
	},
	modal: {
		title: 'Cookie Settings',
		description: 'Cookies are small text files that websites place on your device as you are browsing. They add functionally to the website and improve your experience or if you wish so, remember your preferences.'
	},
	buttons: {
		acceptAll: 'Accept All',
		settings: 'Settings',
		save: 'Save',
		cancel: 'Cancel'
	},
	cookiesTable: {
		cookieName: 'Cookie Name',
		cookiePurpose: 'Cookie Purpose',
		cookieProvenance: 'Cookie Provenance',
		cookieDuration: 'Cookie Duration'
	},
	consents: [
		{
			// essential_storage & security_storage
			key: 'strictly_necessary',
			title: 'Strictly necessary cookies',
			content: 'These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Cookies that allow web shops to hold your items in your cart while you are shopping online are an example of strictly necessary cookies.',
			alwaysOn: true,
			cookies: [['_ocmp', 'Stores the user’s choice for the cookie policy', 'OCMP', '1 year']]
		},
		{
			//functionality_storage & personalization_storage
			key: 'preferences_functionality',
			title: 'Preferences cookies',
			content: 'Also known as “functionality cookies,” these cookies allow a website to remember choices you have made in the past, like what language you prefer.',
			defaultState: 'denied',
			cookies: []
		},
		{
			// analytics_storage
			key: 'statistics_performance',
			title: 'Statistics cookies',
			content: 'Also known as “performance cookies,” these cookies collect information about how you use a website, like which pages you visited and which links you clicked on.',
			defaultState: 'denied',
			cookies: [
				['_ga', 'ID used to identify users.', 'Google Analytics', '2 years'],
				['_gid', 'ID used to identify users for 24 hours after last activity', 'Google Analytics', '24 hours'],
				['_ga_<container-id>', 'ID used to identify users.', 'Google Analytics', '2 years'],
			]
		},
		{
			// ad_storage
			key: 'marketing_advertising',
			title: 'Marketing cookies',
			content: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. These cookies can share that information with other organizations or advertisers. These are persistent cookies and almost always of third-party provenance.',
			defaultState: 'denied',
			cookies: [
			
				['_gac_<property-id>', 'Contains information related to marketing campaigns of the user.', 'Google Analytics', '90 days']
			]
		}
	],
	settings: {
		consentRequired: true,
		floatingButtonEnabled: true,
		debug: true,
		cookieName: '_ocmp'
	},
	consentAlwaysOn: 'Always On',
	doNotTrackText: 'Do Not Track is enabled from the browser',
	cookieVersion: 'sssyXDVquwpHXIOjLjaqEnb6PnLDumpnS0BRV2wcYHQ='
};

// The event is set up like this to init from gtm
window.dispatchEvent(new CustomEvent('ocmp:init:gtm', { detail: ocmpData }));
