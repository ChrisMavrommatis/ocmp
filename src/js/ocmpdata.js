console.log('Test Data Enabled');

var consents = document.querySelectorAll('[data-role="consent-header"]');
consents.forEach(function (e, i) {
	e.addEventListener('click', function (event) {
		var consent_body = event.currentTarget.nextElementSibling;
		if (consent_body.style.display === 'none') {
			consent_body.style.display = 'block';
		} else {
			consent_body.style.display = 'none';
		}
	});
});
