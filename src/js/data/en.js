(function () {
	var event_name = 'ocmp_init_gtm';

	var ocmp_data_obj = {
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
		floatingButton: {
			svg: {
				viewBox: '0 0 122.88 121.74',
				g: {
					path: {
						stroke: 'white',
						fill: 'white',
						d: 'M32.18,105.73c0.7-1.11,2.16-1.44,3.27-0.74c1.11,0.7,1.44,2.16,0.74,3.27l-4.81,7.68c-0.7,1.11-2.16,1.44-3.27,0.74 c-1.11-0.7-1.44-2.16-0.74-3.27L32.18,105.73L32.18,105.73z M6.57,75.32c0.33,1.27-0.42,2.57-1.69,2.9 c-1.27,0.33-2.57-0.42-2.9-1.69c-0.39-1.5-0.73-3.01-1.02-4.54c-0.28-1.52-0.5-3.03-0.66-4.54c-0.1-0.98-0.18-1.98-0.22-2.99 C0.02,63.37,0,62.36,0,61.44C0,44.47,6.88,29.11,18,18C29.11,6.88,44.47,0,61.44,0c16.97,0,32.34,6.83,43.47,17.91 c11.11,11.06,17.97,26.36,17.97,43.3c0,1.31-1.07,2.38-2.38,2.38c-1.31,0-2.38-1.07-2.38-2.38c0-15.64-6.33-29.74-16.56-39.93 C91.3,11.06,77.12,4.76,61.44,4.76c-15.65,0-29.82,6.34-40.08,16.6C11.11,31.62,4.76,45.79,4.76,61.44c0,1.04,0.02,1.97,0.06,2.8 c0.04,0.91,0.11,1.82,0.2,2.73c0.15,1.4,0.35,2.79,0.61,4.17C5.89,72.51,6.2,73.9,6.57,75.32L6.57,75.32z M12.97,96.87 c-0.99,0.86-2.49,0.75-3.35-0.24c-0.86-0.99-0.75-2.49,0.24-3.35c0.6-0.52,1.13-1.14,1.58-1.86c0.47-0.74,0.86-1.61,1.17-2.6 c1.59-5.06,0.63-10.34-0.34-15.69c-0.66-3.64-1.33-7.31-1.3-11.14c0.12-19.6,12.38-35.58,28.42-43.77 c6.73-3.44,14.15-5.5,21.63-5.89c7.51-0.39,15.08,0.93,22.07,4.25C98.7,24,111.38,41.37,114.02,72.13 c0.11,1.31-0.87,2.46-2.18,2.57c-1.31,0.11-2.46-0.87-2.57-2.18c-2.47-28.79-14.02-44.89-28.21-51.64 c-6.26-2.98-13.05-4.15-19.8-3.81c-6.79,0.35-13.55,2.24-19.71,5.38C26.96,29.89,15.82,44.34,15.71,62 c-0.02,3.4,0.61,6.86,1.23,10.29c1.08,5.94,2.14,11.8,0.21,17.95c-0.43,1.38-1,2.62-1.69,3.72C14.76,95.07,13.92,96.04,12.97,96.87 L12.97,96.87z M109.22,82.01c0-1.32,1.07-2.38,2.38-2.38s2.38,1.07,2.38,2.38v9.98c0,1.32-1.07,2.38-2.38,2.38 s-2.38-1.07-2.38-2.38V82.01L109.22,82.01z M20.01,106.56c-0.98,0.87-2.48,0.78-3.35-0.2c-0.87-0.98-0.78-2.48,0.2-3.35 c2.95-2.6,5.1-5.96,6.34-10.17c1.28-4.34,1.6-9.61,0.85-15.92c-1.38-6.78-1.63-13.04-0.82-18.69c0.84-5.91,2.84-11.15,5.89-15.63 c0.74-1.08,2.22-1.36,3.3-0.62c1.08,0.74,1.36,2.22,0.62,3.3c-2.64,3.87-4.37,8.44-5.11,13.62c-0.73,5.13-0.5,10.84,0.77,17.07 c0.03,0.12,0.06,0.24,0.07,0.36c0.84,6.97,0.45,12.88-1.01,17.85C26.26,99.28,23.63,103.36,20.01,106.56L20.01,106.56z M44.18,34.97c-1.14,0.66-2.59,0.27-3.25-0.87c-0.66-1.14-0.27-2.59,0.87-3.25c2.66-1.54,5.5-2.76,8.43-3.65 c8.04-2.44,16.77-2.37,24.71,0.41c7.98,2.8,15.15,8.32,20.03,16.77c1.63,2.81,3,5.96,4.06,9.45c1.51,4.98,2.54,10.54,3.07,16.65 c0.52,6.01,0.55,12.61,0.09,19.79c0,0.07-0.01,0.13-0.02,0.2l-1.66,16.38c-0.13,1.3-1.29,2.26-2.6,2.13 c-1.3-0.13-2.26-1.29-2.13-2.6l1.66-16.4l0-0.01c0.44-6.91,0.41-13.29-0.09-19.1c-0.5-5.82-1.46-11.05-2.86-15.66 c-0.94-3.11-2.17-5.92-3.63-8.45c-4.27-7.4-10.53-12.23-17.48-14.67c-6.99-2.45-14.68-2.51-21.77-0.36 C49.04,32.53,46.55,33.6,44.18,34.97L44.18,34.97z M38.95,98.15c-0.23,1.29-1.46,2.16-2.75,1.93c-1.29-0.23-2.16-1.46-1.93-2.75 c0.55-3.08,0.86-6.53,0.97-10.29c0.11-3.81,0.02-7.98-0.24-12.44c-0.05-0.96-0.14-2.15-0.22-3.31c-0.54-7.59-0.97-13.71,3.47-21.6 c0.98-1.74,2.15-3.36,3.55-4.84c1.4-1.48,3.01-2.82,4.84-3.99c0.12-0.08,0.24-0.14,0.37-0.19c2.71-1.3,5.4-2.31,8.09-2.97 c2.77-0.68,5.52-0.98,8.23-0.83c1.31,0.07,2.32,1.18,2.25,2.49c-0.07,1.31-1.18,2.32-2.49,2.25c-2.25-0.12-4.54,0.13-6.87,0.7 c-2.32,0.57-4.7,1.46-7.12,2.62c-1.47,0.95-2.75,2.01-3.84,3.17c-1.12,1.19-2.07,2.49-2.86,3.91c-3.74,6.66-3.36,12.14-2.88,18.94 c0.07,1,0.14,2.04,0.22,3.38c0.26,4.54,0.35,8.84,0.24,12.83C39.85,91.22,39.53,94.9,38.95,98.15L38.95,98.15z M72.44,44.51 c-1.12-0.68-1.47-2.15-0.79-3.26c0.68-1.12,2.14-1.47,3.26-0.79c0.73,0.45,1.44,0.93,2.13,1.45c0.68,0.51,1.35,1.07,2.02,1.68 c9.06,8.23,12.13,21.46,12.33,35.3c0.19,13.48-2.34,27.54-4.66,37.91c-0.28,1.28-1.55,2.09-2.83,1.8c-1.28-0.28-2.09-1.55-1.8-2.83 c2.26-10.12,4.74-23.81,4.55-36.83c-0.18-12.66-2.88-24.65-10.79-31.84c-0.55-0.5-1.12-0.97-1.69-1.4 C73.6,45.25,73.02,44.86,72.44,44.51L72.44,44.51z M43.15,119.69c-0.76,1.07-2.24,1.33-3.31,0.57c-1.07-0.76-1.33-2.24-0.57-3.31 c1.68-2.37,3.1-4.97,4.26-7.79c1.16-2.84,2.06-5.93,2.68-9.27c1.16-6.23,0.61-14.17,0.08-21.67c-0.18-2.53-0.35-5-0.46-7.54 c-0.16-3.71-0.23-7.35,0.46-10.66c0.75-3.61,2.37-6.74,5.62-9.02c0.73-0.51,1.52-0.97,2.37-1.36c0.85-0.39,1.77-0.74,2.76-1.02 c0.74-0.21,1.47-0.38,2.18-0.5c4.87-0.83,8.73,0.43,11.71,3.03c2.83,2.47,4.75,6.11,5.93,10.24c0.35,1.24,0.64,2.53,0.87,3.85 c0.12,0.72,0.23,1.45,0.31,2.18c0.08,0.72,0.15,1.46,0.2,2.22c0.5,7.54,0.17,16.95-0.85,26.16c-0.98,8.83-2.6,17.53-4.75,24.3 c-0.4,1.25-1.73,1.94-2.98,1.55c-1.25-0.4-1.94-1.73-1.55-2.98c2.04-6.43,3.59-14.81,4.54-23.38c0.99-8.95,1.31-18.06,0.83-25.34 c-0.04-0.63-0.1-1.29-0.18-1.97c-0.07-0.64-0.17-1.28-0.28-1.91c-0.2-1.14-0.45-2.26-0.75-3.35c-0.94-3.31-2.4-6.15-4.48-7.96 c-1.92-1.67-4.47-2.47-7.77-1.91c-0.53,0.09-1.09,0.22-1.68,0.39c-0.77,0.22-1.46,0.47-2.07,0.76c-0.62,0.29-1.17,0.6-1.64,0.93 c-2.09,1.46-3.16,3.59-3.68,6.09c-0.58,2.79-0.51,6.1-0.37,9.49c0.1,2.25,0.28,4.81,0.46,7.43c0.54,7.78,1.12,16.01-0.16,22.85 c-0.68,3.65-1.67,7.04-2.96,10.2C46.64,114.11,45.04,117.02,43.15,119.69L43.15,119.69z M59.44,62.15 c-0.24-1.29,0.62-2.53,1.91-2.76c1.29-0.24,2.53,0.62,2.76,1.91c1.21,6.52,1.79,13.11,1.81,19.73c0.02,6.59-0.52,13.21-1.54,19.84 c-0.2,1.29-1.41,2.18-2.71,1.98c-1.29-0.2-2.18-1.41-1.98-2.71c0.99-6.38,1.51-12.76,1.49-19.11C61.16,74.7,60.6,68.4,59.44,62.15 L59.44,62.15z M56.72,108.31c0.28-1.28,1.55-2.09,2.83-1.8c1.28,0.28,2.09,1.55,1.8,2.83l-2.08,9.37c-0.28,1.28-1.55,2.09-2.83,1.8 c-1.28-0.28-2.09-1.55-1.8-2.83L56.72,108.31L56.72,108.31z'
					}
				}
			}
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
					['_ga_<container-id>', 'ID used to identify users.', 'Google Analytics', '2 years']
				]
			},
			{
				// ad_storage
				key: 'marketing_advertising',
				title: 'Marketing cookies',
				content: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. These cookies can share that information with other organizations or advertisers. These are persistent cookies and almost always of third-party provenance.',
				defaultState: 'denied',
				cookies: [['_gac_<property-id>', 'Contains information related to marketing campaigns of the user.', 'Google Analytics', '90 days']]
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
		cookiesVersion: '0'
	};

	window.dispatchEvent(new CustomEvent(event_name, { detail: ocmp_data_obj }));
})();
