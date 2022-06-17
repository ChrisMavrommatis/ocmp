(function (OCMPGlobal) {
	/// state
	OCMPGlobal.consentGiven = false;
	OCMPGlobal.state = {};

	OCMPGlobal.changeConsentState = function (newConsentState) {
		OCMPGlobal.state = newConsentState;
		OCMPGlobal.consentGiven = true;
		OCMPGlobal.Cookies.set(this.config.cookieName, JSON.stringify(OCMPGlobal.state));
		OCMPGlobal.Events.consentChanged('update', OCMPGlobal.state);
		OCMPGlobal.GTM.pushConsents('update', OCMPGlobal.state)
	};

	OCMPGlobal.initializeConsentState = function (newConsentState, consentGiven) {
		OCMPGlobal.state = newConsentState;
		if (consentGiven) {
			OCMPGlobal.consentGiven = true;
		}
		OCMPGlobal.Events.consentChanged('default', OCMPGlobal.state);
		OCMPGlobal.GTM.pushConsents('default', OCMPGlobal.state)
	};

})(window.OCMP);
