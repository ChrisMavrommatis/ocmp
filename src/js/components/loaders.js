(function (OCMPGlobal, Cookies, Browser) {
	
	function loadDataInternal(ocmp, ocmpData) {
		if (!ocmp || !ocmpData) {
			return false;
		}
		var barData = {};
		var modalData = {
			consentData: {
				consents: ocmpData.consents,
				alwaysOn: ocmpData.consentAlwaysOn,
				doNotTrack: ocmpData.doNotTrackText,
				cookieVersion: ocmpData.cookieVersion
			}
		};
		var floatingButtonData = {};

		if (ocmpData.bar) {
			barData.title = ocmpData.bar.title;
			barData.description = ocmpData.bar.description;
		}

		if (ocmpData.modal) {
			modalData.title = ocmpData.modal.title;
			modalData.description = ocmpData.modal.description;
		}

		if (ocmpData.buttons) {
			barData.buttons = {
				settings: ocmpData.buttons.settings,
				acceptAll: ocmpData.buttons.acceptAll
			};

			modalData.buttons = {
				cancel: ocmpData.buttons.cancel,
				save: ocmpData.buttons.save
			};
		}

		if (ocmpData.cookiesTable) {
			modalData.cookiesTable = {
				name: ocmpData.cookiesTable.cookieName,
				purpose: ocmpData.cookiesTable.cookiePurpose,
				provenance: ocmpData.cookiesTable.cookieProvenance,
				duration: ocmpData.cookiesTable.cookieDuration
			};
		}

		ocmp.components.bar.data = barData;
		ocmp.components.modal.data = modalData;
		ocmp.components.floatingButton.data = floatingButtonData;
		Object.freeze(ocmp.components.bar.data);
		Object.freeze(ocmp.components.modal.data);
		Object.freeze(ocmp.components.floatingButton.data);
		return true;
	}

	function loadConfigInternal(ocmp, ocmpData) {
		if (!ocmp || !ocmpData || !ocmpData.settings) {
			return false;
		}

		if (ocmpData.settings.debug) {
			ocmp.config.debug = ocmpData.settings.debug;
		}

		if (ocmpData.settings.consentRequired) {
			ocmp.config.consentRequired = ocmpData.settings.consentRequired;
		}

		if (ocmpData.settings.floatingButtonEnabled) {
			ocmp.config.floatingButtonEnabled = ocmpData.settings.floatingButtonEnabled;
		}

		if (ocmpData.settings.cookieName) {
			ocmp.config.cookieName = ocmpData.settings.cookieName;
		}

		if (Browser.doNotTrackSupported()) {
			ocmp.config.doNotTrackEnabled = Browser.doNotTrackEnabled();
		}

		return true;
	}

	function loadConsentsInternal(ocmp, consentData) {
		if (ocmp.config.doNotTrackEnabled) {
			ocmp.initializeConsentState(ocmp.getMinimumConsents());
			return true;
		}

		var cookie = Cookies.get(ocmp.config.cookieName);
		if (!cookie) {
			ocmp.initializeConsentState(ocmp.getDefaultConsents());
			return true;
		}

		var cookieConsents = ocmp.getCookieConsents();
		if (cookieConsents.cookiesVersion === consentData.cookiesVersion) {
			ocmp.initializeConsentState(cookieConsents, true);
			return true;
		}

		ocmp.initializeConsentState(ocmp.getDefaultConsents());
		Cookies.remove(ocmp.config.cookieName);
		return true;
	}

	function loadComponentInternal(ocmp, component) {
		if (!ocmp || !component) {
			return false;
		}

		if (component.loaded) {
			return true;
		}

		var element = document.getElementById(component.id);
		if (!element) {
			return false;
		}

		if (component.dataLoadCB) {
			component.dataLoadCB(ocmp, element, component.data);
		}

		if (component.eventsSetupCB) {
			component.eventsSetupCB(ocmp, element);
		}

		component.loaded = true;
		component.element = element;
		return true;
	}

	OCMPGlobal.loadComponent = loadComponentInternal;
	OCMPGlobal.loadConfig = loadConfigInternal;
	OCMPGlobal.loadConsents = loadConsentsInternal;
	OCMPGlobal.loadData = loadDataInternal;
})(window.OCMP, window.Cookies, window.Browser);
