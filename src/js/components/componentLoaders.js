(function (OCMPGlobal) {

	function floatingButton_eventsSetupCB(ocmp, element){
		element.addEventListener('click', ocmp.actions.openModal);
	}

	function floatingButton_dataLoadCB(ocmp, element, componentData){
		if(!componentData){
			return false;
		}

		if(componentData.html){
			ocmp.utilities.changeElementHtml(element.querySelector('[data-role="floating-button-content"]'), componentData.html);
			return true;
		} else if(componentData.svg){
			var contentEl = element.querySelector('[data-role="floating-button-content"]');
			var fragment = document.createDocumentFragment();
			ocmp.utilities.createSVGDynamically(fragment, componentData.svg);
			contentEl.replaceChildren(fragment);	
		}

		return true;
	}

	function bar_eventsSetupCB (ocmp, element) {
		var settings_btn = element.querySelector('[data-role="bar-button-settings"]');
		var accept_btn = element.querySelector('[data-role="bar-button-accept-all"]');
		settings_btn.addEventListener('click', ocmp.actions.openModal);
		accept_btn.addEventListener('click', ocmp.actions.acceptAll);
	};

	function bar_dataLoadCB (ocmp, element, componentData) {
		if(!componentData){
			return false;
		}

		ocmp.utilities.changeElementText(element.querySelector('[data-role="bar-title"]'), componentData.title);
		ocmp.utilities.changeElementHtml(element.querySelector('[data-role="bar-description"]'), componentData.description);

		ocmp.utilities.changeElementText(element.querySelector('[data-role="bar-button-settings"]'), componentData.buttons.settings);
		ocmp.utilities.changeElementText(element.querySelector('[data-role="bar-button-accept-all"]'), componentData.buttons.acceptAll);

		return true;
	};

	function modal_eventsSetupCB (ocmp, element) {
		var cancelButton = element.querySelector('[data-role="modal-button-cancel"]');
		var saveButton = element.querySelector('[data-role="modal-button-save"]');

		cancelButton.addEventListener('click', ocmp.actions.closeModal);
		saveButton.addEventListener('click', ocmp.actions.saveSettingsAndCloseModal);

		var consents = element.querySelectorAll('[data-role="consent"]');
		if(!consents || consents.length < 1){
			return;
		}

		consents.forEach(function (element, index) {
			var consentHeader = element.querySelector('[data-role="consent-header"]');
			consentHeader.addEventListener('click', ocmp.actions.toggleConsentBody)
		});
	};
	
	function modal_dataLoadCB (ocmp, element, componentData) {
		if(!componentData){
			return false;
		}

		ocmp.utilities.changeElementText(element.querySelector('[data-role="modal-title"]'), componentData.title);
		ocmp.utilities.changeElementHtml(element.querySelector('[data-role="modal-description"]'), componentData.description);

		ocmp.utilities.changeElementText(element.querySelector('[data-role="modal-button-cancel"]'), componentData.buttons.cancel);
		ocmp.utilities.changeElementText(element.querySelector('[data-role="modal-button-save"]'), componentData.buttons.save);

		var consents = element.querySelectorAll('[data-role="consent"]');
		if(!consents || consents.length < 1){
			return false;
		}

		consents.forEach(function (element, index) {
			consent_dataLoad(ocmp, element, componentData.consentData)
		});
		return true;
	};

	function consent_dataLoad(ocmp, element, consentData){
		var consent = consentData.consents.find(function (consent, index) {
			return consent.key === element.id;
		});
		
		ocmp.Logger.info(element, consent);
		
		ocmp.utilities.changeElementText(element.querySelector('[data-role="consent-title"]'), consent.title);
		ocmp.utilities.changeElementHtml(element.querySelector('[data-role="consent-content"]'), consent.content);

		var existingCookiesTable = element.querySelector('table');
		var consentBody = element.querySelector('[data-role="consent-body"]');
		var cookiesTable = ocmp.utilities.createCookiesTable(ocmp.components.modal.data.cookiesTable, consent.cookies)
		
		if(!!existingCookiesTable){
			existingCookiesTable.replaceWith(cookiesTable);
		} else {
			consentBody.appendChild(cookiesTable);
		}
		
		var consentSwitch = element.querySelector('[data-role="consent-switch"]');
		if(consent.alwaysOn) {
			consentSwitch.replaceChildren(ocmp.utilities.createLabel(consentData.alwaysOn));
			return;
		}

		if(ocmp.config.doNotTrackEnabled){
			consentSwitch.replaceChildren(ocmp.utilities.createLabel(consentData.doNotTrack));
			return;
		}

		// TODO: do i need to do more here?
	}

	OCMPGlobal.components.floatingButton.eventsSetupCB = floatingButton_eventsSetupCB;
	OCMPGlobal.components.floatingButton.dataLoadCB = floatingButton_dataLoadCB;

	OCMPGlobal.components.bar.eventsSetupCB = bar_eventsSetupCB
	OCMPGlobal.components.bar.dataLoadCB = bar_dataLoadCB

	OCMPGlobal.components.modal.eventsSetupCB = modal_eventsSetupCB
	OCMPGlobal.components.modal.dataLoadCB = modal_dataLoadCB

})(window.OCMP);
