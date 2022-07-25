(function (window) {
	var OCMPGlobal = {
		version: '1.0.1',
	};

	function initializeInternal(ocmpData) {
		if (!OCMPGlobal.config.load(OCMPGlobal, ocmpData)) {
			return OCMPGlobal.Logger.error('Could not load config at Initialize');
		}

		if (!OCMPGlobal.components.loadData(OCMPGlobal, ocmpData)) {
			return OCMPGlobal.Logger.error('Could not load data at Initialize');
		}

		if (!OCMPGlobal.consents.load(OCMPGlobal, OCMPGlobal.components.modal.data.consentData)) {
			return OCMPGlobal.Logger.error('Could not load consents at Initialize');
		}

		if (!OCMPGlobal.components.load(OCMPGlobal, OCMPGlobal.components.floatingButton)) {
			return OCMPGlobal.Logger.error('Could not load component: ' + OCMPGlobal.components.floatingButton.key + ' at Initialize');
		}

		if (!OCMPGlobal.components.load(OCMPGlobal, OCMPGlobal.components.required)) {
			return OCMPGlobal.Logger.error('Could not load component: ' + OCMPGlobal.components.required.key + ' at Initialize');
		}

		if (OCMPGlobal.consentGiven) {
			if (OCMPGlobal.config.floatingButtonEnabled) {
				OCMPGlobal.utilities.showComponent(OCMPGlobal.components.floatingButton);
			}
			OCMPGlobal.Events.emitOcmpLoaded();
			return;
		}
		if (!OCMPGlobal.components.load(OCMPGlobal, OCMPGlobal.components.bar)) {
			return OCMPGlobal.Logger.error('Could not load component: ' + OCMPGlobal.components.bar.key + ' at Initialize');
		}

		if (OCMPGlobal.config.consentRequired) {
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.required);
		}
		OCMPGlobal.utilities.showComponent(OCMPGlobal.components.bar);
		OCMPGlobal.Events.emitOcmpLoaded();
	}

	OCMPGlobal.Initialize = function (ocmpData) {
		// this is from ocmp data not the config from ocmp
		ocmpData.settings.debug && console.log(ocmpData);
		initializeInternal(ocmpData);
	};

	window.OCMP = OCMPGlobal;
})(window);
