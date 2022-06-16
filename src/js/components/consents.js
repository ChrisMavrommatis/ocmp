(function (OCMPGlobal, Cookies, Browser) {
	
	// TODO Maybe bring this earlier
	if (!OCMPGlobal || !Cookies || !Browser) {
		console.error('OCMP, Cookies or Browser lib not found');
		return;
	}

	// todo maybe bring the cookie handling into OCMP
	function getCookieConsentsInternal() {
		var cookieName = OCMPGlobal.config.cookieName;
		var cookie = Cookies.get(cookieName);
		if (cookie) {
			return OCMPGlobal.decodeState(cookie);
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

	function getMaximumConsentsInternal(){
		var consentData = OCMPGlobal.components.modal.data.consentData;
		var consents = {
			cookieVersion: consentData.cookieVersion
		};
		ocmpData.consents.forEach(function (consent, index) {
			consents[consent.key] = 'granted'
		});
		return consents;
	}

	OCMPGlobal.getCookieConsents = getCookieConsentsInternal;
	OCMPGlobal.getMinimumConsents = getMinimumConsentsInternal;
	OCMPGlobal.getDefaultConsents = getDefaultConsentsInternal;
	OCMPGlobal.getMaximumConsents = getMaximumConsentsInternal;

})(window.OCMP, window.Cookies, window.Browser);
