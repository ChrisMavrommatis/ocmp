(function (OCMPGlobal) {
	/// components
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
				cookiesVersion: ocmpData.cookiesVersion
			}
		};

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
		ocmp.components.floatingButton.data = ocmpData.floatingButton;
		Object.freeze(ocmp.components.bar.data);
		Object.freeze(ocmp.components.modal.data);
		Object.freeze(ocmp.components.floatingButton.data);
		return true;
	}

	var components = {
		load: loadComponentInternal,
		loadData: loadDataInternal,
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
	};

	OCMPGlobal.components = components;
})(window.OCMP);
