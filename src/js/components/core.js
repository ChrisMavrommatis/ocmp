(function (window) {
	var ocmp = {
		version: '0.0.1',
		config: {
			debug: false,
			floatingButtonEnabled: false,
			consentRequired: false,
			doNotTrackEnabled: false,
			cookieName: '_ocmp',
		},
		//data: {},
		components: {
			required: {
				loaded: false,
				key: 'required',
				id: 'ocmp-required',
				element: null,
				data: null
			},
			bar: {
				loaded: false,
				key: 'bar',
				id: 'ocmp-bar',
				element: null,
				data: null
			},
			modal: {
				loaded: false,
				key: 'modal',
				id: 'ocmp-modal',
				element: null,
				data: null
			},
			floatingButton: {
				loaded: false,
				key: 'floatingButton',
				id: 'ocmp-floating-button',
				element: null,
				data: null
			}
		},
		consentGiven: false,
		state: {},
		initializeConsentState: function(newConsentState, consentGiven) {
			this.state = newConsentState;
			if(consentGiven){
				this.consentGiven = true;
			}
			// TODO emit GTM and Datalayer
			// window.GTM('consent', 'default', ocmp.mapToGTMConsents(newConsentState));
			// window.dataLayer.push({ event: 'default_consent' });
		},
		changeConsentState: function(newConsentState){
			this.state = newConsentState;
			this.consentGiven = true;
			window.Cookies.set(this.config.cookieName, this.encodeState(this.state), { expires: 90, sameSite: "Lax", secure: true});
		},
		encodeState: function(state){
			return window.btoa(JSON.stringify(state));
		},
		decodeState: function(encodedState) {
			return JSON.stringify(window.atob(encodedState));
		},
		logError: function (text) {
			this.log(text, 'error');
		},
		log: function (text, type) {
			if (!this.config.debug) {
				return;
			}
			switch (type) {
				case 'error':
					console.error(text);
					break;
				case 'warning':
					console.warn(text);
					break;
				case 'info':
					console.info(text);
				default:
					console.log(text);
					break;
			}
		}
	};

	function initializeInternal(ocmpData) {
		if (!ocmp.loadConfig(ocmp, ocmpData)) {
			return ocmp.logError('Could not load config at Initialize');
		}

		if(!ocmp.loadData(ocmp, ocmpData)){
			return ocmp.logError('Could not load data at Initialize');
		}

		if (!ocmp.loadConsents(ocmp, ocmp.components.modal.data.consentData)) {
			return ocmp.logError('Could not load consents at Initialize');
		}

		if (!ocmp.loadComponent(ocmp, ocmp.components.floatingButton)) {
			return ocmp.logError('Could not load component: ' + ocmp.components.floatingButton.key + ' at Initialize');
		}

		if (!ocmp.loadComponent(ocmp, ocmp.components.required)) {
			return ocmp.logError('Could not load component: ' + ocmp.components.required.key + ' at Initialize');
		}

		if (ocmp.consentGiven) {
			if (ocmp.config.floatingButtonEnabled) {
				ocmp.showComponent(ocmp.components.floatingButton);
			}
			// TODO emit event on loaded state
			// document.dispatchEvent(new Event('ocmp:loaded'));
			return;
		}
		if (!ocmp.loadComponent(ocmp, ocmp.components.bar)) {
			return ocmp.logError(`Could not load component: ${ocmp.components.bar.key} at Initialize`);
		}

		if (ocmp.config.consentRequired) {
			ocmp.showComponent(ocmp.components.required);
		}
		ocmp.showComponent(ocmp.components.bar);
		// TODO emit event on loaded state
		//document.dispatchEvent(new Event('ocmp:loaded'));
	}

	ocmp.Initialize = function (ocmpData) {
		// this is from ocmp data not the config from ocmp
		ocmpData.settings.debug && console.log(ocmpData);
		initializeInternal(ocmpData);
	};

	window.addEventListener('ocmp:init:gtm', function (event) {
		ocmpData = event.detail;
		// this is from ocmp data not the config from ocmp
		ocmpData.settings.debug && console.log(ocmpData);
		initializeInternal(ocmpData);
	});

	window.OCMP = ocmp;
})(window);
