(function (OCMPGlobal) {
	/// config
	var config = {
		debug: false,
		floatingButtonEnabled: false,
		consentRequired: false,
		doNotTrackEnabled: false,
		cookieName: '_ocmp'
	};

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

		if (ocmp.Browser.doNotTrackSupported()) {
			ocmp.config.doNotTrackEnabled = ocmp.Browser.doNotTrackEnabled();
		}

		return true;
	}

	config.load = loadConfigInternal;
	OCMPGlobal.config = config;
})(window.OCMP);
