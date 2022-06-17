(function (OCMPGlobal) {
	/// Actions
	function openModalInternal(event) {
		if (!OCMPGlobal.components.load(OCMPGlobal, OCMPGlobal.components.modal)) {
			return OCMPGlobal.Logger.error('Could not load component: ' + OCMPGlobal.components.modal.key + ' at openModal');
		}

		if (OCMPGlobal.config.consentRequired) {
			if (!OCMPGlobal.components.load(OCMPGlobal, OCMPGlobal.components.required)) {
				return OCMPGlobal.Logger.error('Could not load component: ' + OCMPGlobal.components.required.key + ' at openModal');
			}
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.required);
		}

		if(OCMPGlobal.config.floatingButtonEnabled) {
			OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.floatingButton);
		}

		OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.bar);
		OCMPGlobal.utilities.showComponent(OCMPGlobal.components.modal);

		var modalConsentElements = OCMPGlobal.components.modal.element.querySelectorAll('[data-role="consent"]');
		modalConsentElements.forEach(function(element, index){
			var input = element.querySelector('input[type="checkbox"]');
			if(!input){
				return;
			}
			input.checked = OCMPGlobal.state[element.id] === 'granted';
		});
	}

	function closeModalInternal(event) {
		OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.modal);
		if (!OCMPGlobal.consentGiven) {
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.bar);
			return;
		}
		if (OCMPGlobal.config.consentRequired) {
			OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.required);
		}
		if(OCMPGlobal.config.floatingButtonEnabled) {
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.floatingButton);
		}
	}

	function acceptAllInternal(event) {
		if(!OCMPGlobal || !OCMPGlobal.components.modal.data.consentData) {
			return;
		}

		if(OCMPGlobal.config.doNotTrackEnabled) {
			OCMPGlobal.changeConsentState(OCMPGlobal.consents.getMinimum());
		} else {
			OCMPGlobal.changeConsentState(OCMPGlobal.consents.getMaximum());
		}

		OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.bar);
		if(OCMPGlobal.config.consentRequired){
			OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.required);
		}
		if(OCMPGlobal.config.floatingButtonEnabled) {
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.floatingButton);
		}
	}

	function saveSettingsAndCloseModalInternal(event) {
		var consents = OCMPGlobal.consents.fromModal();
		if(!consents){
			return OCMPGlobal.Logger.error("Could not retrieve consents from modal");
		}

		OCMPGlobal.changeConsentState(consents);

		OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.modal);

		if(OCMPGlobal.config.consentRequired){
			OCMPGlobal.utilities.hideComponent(OCMPGlobal.components.required);
		}
		if(OCMPGlobal.config.floatingButtonEnabled) {
			OCMPGlobal.utilities.showComponent(OCMPGlobal.components.floatingButton);
		}
	}

	function toggleConsentBodyInternal(event) {
		var consent_body = event.currentTarget.nextElementSibling;
		if (OCMPGlobal.utilities.elementIsHidden(consent_body)) {
			OCMPGlobal.utilities.showElement(consent_body);
		} else {
			OCMPGlobal.utilities.hideElement(consent_body);
		}
	}

	var actions = {
		openModal: openModalInternal,
		closeModal: closeModalInternal,
		acceptAll: acceptAllInternal,
		saveSettingsAndCloseModal: saveSettingsAndCloseModalInternal,
		toggleConsentBody: toggleConsentBodyInternal
	};
	OCMPGlobal.actions = actions;
})(window.OCMP);
