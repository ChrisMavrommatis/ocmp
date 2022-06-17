(function (OCMPGlobal) {
	/// Events

	function emitOcmpLoaded() {
		emitInternal('ocmp:loaded');
	}

	function emitInternal(event, data) {
		document.dispatchEvent(new CustomEvent(event, { detail: data }));
	}

	function consentChangedInternal(type, consentState){
		emitInternal('ocmp:consentchange:' + type, consentState);
	}

	window.addEventListener('ocmp:init:gtm', function (event) {
		ocmpData = event.detail;
		OCMPGlobal.Initialize(ocmpData);
	});

	OCMPGlobal.Events = {
		emitOcmpLoaded: emitOcmpLoaded,
		emit: emitInternal,
		consentChanged: consentChangedInternal
	};
})(window.OCMP);
