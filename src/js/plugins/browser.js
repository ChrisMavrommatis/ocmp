(function (OCMPGlobal) {
	/// Browser
	function doNotTrackSupported() {
		return !!(window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external);
	}

	function doNotTrackEnabled() {
		return window.doNotTrack === '1' || navigator.doNotTrack === 'yes' || navigator.doNotTrack === '1' || navigator.msDoNotTrack === '1' || (window.external.msTrackingProtectionEnabled && window.external.msTrackingProtectionEnabled());
	}

	OCMPGlobal.Browser = {
		doNotTrackSupported: doNotTrackSupported,
		doNotTrackEnabled: doNotTrackEnabled
	};
})(window.OCMP);
