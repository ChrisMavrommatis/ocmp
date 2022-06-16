(function (OCMPGlobal) {

	function openModalInternal(event) {
		if (!OCMPGlobal.loadComponent(OCMPGlobal, OCMPGlobal.components.modal)) {
			return OCMPGlobal.logError('Could not load component: ' + OCMPGlobal.components.modal.key + ' at openModal');
		}

		if (OCMPGlobal.config.consentRequired) {
			if (!OCMPGlobal.loadComponent(OCMPGlobal, OCMPGlobal.components.required)) {
				return OCMPGlobal.logError('Could not load component: ' + OCMPGlobal.components.required.key + ' at openModal');
			}
			OCMPGlobal.showComponent(OCMPGlobal.components.required);
		}

		OCMPGlobal.hideComponent(OCMPGlobal.components.bar);
		OCMPGlobal.showComponent(OCMPGlobal.components.modal);

		// TODO: need to address the bug below

	}

	// bug
	// this probably doesn't reset the consents need to fix this
	// or offload it to open so it always reads them
	function closeModalInternal(event) {
		OCMPGlobal.hideComponent(OCMPGlobal.components.modal);
		if (!OCMPGlobal.consentGiven) {
			OCMPGlobal.showComponent(OCMPGlobal.components.bar);
			return;
		}
		if (OCMPGlobal.config.consentRequired) {
			OCMPGlobal.hideComponent(OCMPGlobal.components.required);
		}
	}

	function acceptAllInternal(event) {
		if(!OCMPGlobal || !OCMPGlobal.components.modal.data.consentData) {
			return;
		}

		if(OCMPGlobal.config.doNotTrackEnabled) {
			OCMPGlobal.changeConsentState(OCMPGlobal.getMinimumConsents());
		} else {
			OCMPGlobal.changeConsentState(OCMPGlobal.getMaximumConsents());
		}

		OCMPGlobal.hideComponent(OCMPGlobal.components.bar);
		if(OCMPGlobal.config.consentRequired){
			OCMPGlobal.hideComponent(OCMPGlobal.components.required);
		}
		if(OCMPGlobal.config.floatingButtonEnabled) {
			OCMPGlobal.showComponent(OCMPGlobal.components.floatingButton);
		}
	}

	function saveSettingsAndCloseModalInternal(event) {
		// TODO: finish this
	}

	function toggleConsentBodyInternal(event) {
		var consent_body = event.currentTarget.nextElementSibling;
		if (OCMPGlobal.elementIsHidden(consent_body)) {
			OCMPGlobal.showElement(consent_body);
		} else {
			OCMPGlobal.hideElement(consent_body);
		}
	}

	OCMPGlobal.openModal = openModalInternal;
	OCMPGlobal.closeModal = closeModalInternal;

	OCMPGlobal.acceptAll = acceptAllInternal;
	OCMPGlobal.saveSettingsAndCloseModal = saveSettingsAndCloseModalInternal;

	OCMPGlobal.toggleConsentBody = toggleConsentBodyInternal;
})(window.OCMP);
