(function (OCMPGlobal) {
	/// consents
	function loadConsentsInternal(ocmp, consentData) {
		if (ocmp.config.doNotTrackEnabled) {
			ocmp.initializeConsentState(ocmp.consents.getMinimum());
			return true;
		}

		var cookie = ocmp.Cookies.get(ocmp.config.cookieName);
		if (!cookie) {
			ocmp.initializeConsentState(ocmp.consents.getDefault());
			return true;
		}

		var cookieConsents = ocmp.consents.fromCookie();
		if (cookieConsents.cookiesVersion === consentData.cookiesVersion) {
			ocmp.initializeConsentState(cookieConsents, true);
			return true;
		}

		ocmp.initializeConsentState(ocmp.consents.getDefault());
		ocmp.Cookies.remove(ocmp.config.cookieName);
		return true;
	}

	function getCookieConsentsInternal() {
		var cookieName = OCMPGlobal.config.cookieName;
		var cookie = OCMPGlobal.Cookies.get(cookieName);
		if (cookie) {
			return JSON.parse(cookie);
		}
	}

	function getMinimumConsentsInternal() {
		var consentData = OCMPGlobal.components.modal.data.consentData;
		var consents = {
			cookieVersion: consentData.cookieVersion
		};
		consentData.consents.forEach(function (consent, index) {
			consents[consent.key] = consent.alwaysOn ? 'granted' : 'denied';
		});
		return consents;
	}

	function getDefaultConsentsInternal() {
		var consentData = OCMPGlobal.components.modal.data.consentData;
		var consents = {
			cookieVersion: consentData.cookieVersion
		};
		ocmpData.consents.forEach(function (consent, index) {
			consents[consent.key] = consent.alwaysOn ? 'granted' : consent.defaultState;
		});
		return consents;
	}

	function getMaximumConsentsInternal() {
		var consentData = OCMPGlobal.components.modal.data.consentData;
		var consents = {
			cookieVersion: consentData.cookieVersion
		};
		ocmpData.consents.forEach(function (consent, index) {
			consents[consent.key] = 'granted';
		});
		return consents;
	}

	function getModalConsentsInternal() {
		if(!OCMPGlobal.components.modal || !OCMPGlobal.components.modal.element){
			return {};
		}
		var modalElement = OCMPGlobal.components.modal.element;

		var consents = getDefaultConsentsInternal();
		Array.from(Object.keys(consents)).forEach(function (key, index) {
			var input = modalElement.querySelector('#' + key + '_cookies');
			if (input) {
				consents[key] = input.checked ? 'granted' : 'denied';
			}
		});
		return consents;
	}

	var consents = {
		load: loadConsentsInternal,
		fromCookie: getCookieConsentsInternal,
		fromModal: getModalConsentsInternal,
		getMinimum: getMinimumConsentsInternal,
		getDefault: getDefaultConsentsInternal,
		getMaximum: getMaximumConsentsInternal
	};

	OCMPGlobal.consents = consents;
})(window.OCMP);
