(function (OCMPGlobal) {
	/// GTM
	window.dataLayer = window.dataLayer || [];
	var pushInternal = function () {
		dataLayer.push(arguments);
	};

	function mapToGTMConsentsInternal(consents) {
		return {
			essential_storage: consents['strictly_necessary'],
			security_storage: consents['strictly_necessary'],
			functionality_storage: consents['preferences_functionality'],
			personalization_storage: consents['preferences_functionality'],
			analytics_storage: consents['statistics_performance'],
			ad_storage: consents['marketing_advertising'],
			ad_user_data: consents['marketing_advertising'],
			ad_personalization : consents['marketing_advertising']
		};
	}

	function pushConsentsInternal(type, consents) {
		pushInternal('consent', type, mapToGTMConsentsInternal(consents));
		window.dataLayer.push({ event: type + '_consent' });
	}

	OCMPGlobal.GTM = {
		push: pushInternal,
		pushConsents: pushConsentsInternal,
		mapToGTMConsents: mapToGTMConsentsInternal
	};
})(window.OCMP);
