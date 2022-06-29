(function (OCMPGlobal) {
	/// utilities
	function elementIsHiddenInternal(element) {
		return element.style.display === 'none';
	}

	function showElementInternal(element) {
		element.style.display = 'block';
	}

	function hideElementInternal(element) {
		element.style.display = 'none';
	}

	function changeElementTextInternal(element, textContent) {
		if (!element || !textContent) {
			return false;
		}
		element.textContent = textContent;
		return true;
	}

	function changeElementHtmlInternal(element, htmlContent) {
		if (!element || !htmlContent) {
			return false;
		}
		element.innerHTML = htmlContent;
		return true;
	}

	function createLabelInternal(text) {
		var labelFragment = document.createDocumentFragment();
		var label = document.createElement('label');
		label.appendChild(document.createTextNode(text));
		labelFragment.appendChild(label);
		return labelFragment;
	}

	function createCookiesTableInternal(cookieTableHeaders, consentCookies) {
		var tableFragment = document.createDocumentFragment();
		if(!consentCookies || consentCookies.length < 1){
			return tableFragment;
		}

		var table = document.createElement('table');
		table.classList.add('ocmp-table');
		tableFragment.appendChild(table);

		var thead = document.createElement('thead');
		table.appendChild(thead);
		var headTr = document.createElement('tr');
		thead.appendChild(headTr);

		Array.from(Object.keys(cookieTableHeaders)).forEach(function (key, index) {
			var th = document.createElement('th');
			headTr.appendChild(th);
			th.appendChild(document.createTextNode(cookieTableHeaders[key]));
		});

		var tbody = document.createElement('tbody');
		table.appendChild(tbody);

		consentCookies.forEach(function (cookie, index) {
			var tr = document.createElement('tr');
			tbody.appendChild(tr);
			cookie.forEach(function (text, index) {
				var td = document.createElement('td');
				tr.appendChild(td);
				td.appendChild(document.createTextNode(text));
			})
		});
	
		return tableFragment;
	}

	function showComponentInternal(component) {
		if (component && component.loaded) {
			showElementInternal(component.element);
		}
	}

	function hideComponentInternal(component) {
		if (component && component.loaded) {
			hideElementInternal(component.element);
		}
	}

	function createDynamicHtmlTagsFromObjectInternal(parent, data, namespace){
		// if parent is root then it needs to be Document Fragment
		var keys = Array.from(Object.keys(data));
		keys.forEach(function(key, index) {
			if(typeof data[key] === 'object') {
				var tag = !!namespace ? document.createElementNS(namespace, key) : document.createElement(key);
				parent.appendChild(tag);
				// recurse
				createDynamicHtmlTagsFromObjectInternal(tag, data[key], namespace);
			} else {
				parent.setAttribute(key, data[key]);
			}
		});
	}

	function createSVGDynamicallyInternal(fragment, data){
			var namespace = 'http://www.w3.org/2000/svg';
			var svg = document.createElementNS(namespace, 'svg');
			createDynamicHtmlTagsFromObjectInternal(svg, data, namespace);
			fragment.appendChild(svg);
	}

	var utilities = {
		showComponent: showComponentInternal,
		hideComponent: hideComponentInternal,
		showElement: showElementInternal,
		hideElement: hideElementInternal,
		elementIsHidden: elementIsHiddenInternal,
		changeElementText: changeElementTextInternal,
		changeElementHtml: changeElementHtmlInternal,
		createLabel: createLabelInternal,
		createCookiesTable: createCookiesTableInternal,
		createDynamicHtmlTagsFromObject: createDynamicHtmlTagsFromObjectInternal,
		createSVGDynamically: createSVGDynamicallyInternal
	};

	OCMPGlobal.utilities = utilities;
})(window.OCMP);
