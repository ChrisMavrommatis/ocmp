(function (OCMPGlobal) {
	/// Logger
	function logInternal(text, type) {
		if (!OCMPGlobal.config.debug) {
			return;
		}
		switch (type) {
			case 'error':
				console.error(text);
				break;
			case 'warning':
				console.warn(text);
				break;
			case 'info':
				console.info(text);
				break;
			default:
				console.log(text);
				break;
		}
	}

	function errorInternal(text) {
		logInternal(text, 'error');
	}

	function infoInternal(text) {
		logInternal(text, 'info');
	}

	OCMPGlobal.Logger = {
		error: errorInternal,
		info: infoInternal
	};
})(window.OCMP);
