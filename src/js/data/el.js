
window.dispatchEvent(new CustomEvent("ocmp:init:gtm", {detail: {
	bar: {
		title: 'Πολιτική Cookies',
		description: 'Χρησιμοποιούμε cookies για να σας παρέχουμε την καλύτερη δυνατή εμπειρία στον ιστότοπο μας.'
	},
	modal: {
		title: 'Ρυθμίσεις Cookies',
		description: 'Τα cookies είναι μικρά αρχεια κειμένου τα οποία, μέσω του προγράμματος περιήγησης εγκαθίστανται στον υπολογιστή ή την ηλεκτρονική συσκευή σας, προσθέτοντας λειτουργικότητα στην ιστοσελίδα και βελτιώνοντας την εμπειρία περιήγησης ή, εφ΄ όσον το επιλέξετε, απομνημονεύοντας τις προτιμήσεις σας.'
	},
	buttons: {
		acceptAll: 'Αποδοχή όλων',
		settings: 'Ρυθμίσεις',
		save: 'Αποθήκευση',
		cancel: 'Ακύρωση'
	},
	cookiesTable: {
		cookieName: 'Όνομα Cookie',
		cookiePurpose: 'Σκοπός Cookie',
		cookieProvenance: 'Προέλευση Cookie',
		cookieDuration: 'Διάρκεια Cookie'
	},
	consents: [
		{
			// essential_storage & security_storage
			key: 'strictly_necessary',
			title: 'Απολύτως απαραίτητα cookies',
			content: 'Αυτά τα cookies είναι απαραίτητα για την περιήγησή σας στον ιστότοπο και τη χρήση των δυνατοτήτων του, όπως η πρόσβαση σε ασφαλείς περιοχές το. Τα cookies που επιτρέπουν στα ηλεκτρονικά καταστήματα να κρατούν τα προϊόντα σας στο καλάθι σας είναι ένα παράδειγμα απολύτως απαραίτητων cookies.',
			alwaysOn: true,
			cookies: [['_ocmp', 'Αποθηκεύει τις επιλογές του χρήστη για τα cookies για τον ιστότοπο.', 'OCMP', '1 χρόνος']]
		},
		{
			//functionality_storage & personalization_storage
			key: 'preferences_functionality',
			title: 'Cookies προτιμήσεων',
			content: 'Γνωστά και ως "cookies λειτουργικότητας", αυτά τα coo_gatkies επιτρέπουν σε έναν ιστότοπο να θυμάται τις επιλογές που έχετε κάνει στο παρελθόν, όπως ποια γλώσσα προτιμάτε',
			defaultState: 'denied',
			cookies: []
		},
		{
			// analytics_storage
			key: 'statistics_performance',
			title: 'Cookies στατιστικών',
			content: 'Γνωστά και ως "cookies απόδοσης", αυτά τα cookies συλλέγουν πληροφορίες σχετικά με τον τρόπο χρήσης ενός ιστότοπου, όπως ποιες σελίδες επισκεφτήκατε και σε ποιους συνδέσμους κάνατε κλικ.',
			defaultState: 'denied',
			cookies: [
				['_ga', 'Χρησιμοποιείται για να ξεχωρίζει τους χρήστες', 'Google Analytics', '2 χρόνια'],
				['_gid', 'Χρησιμοποιείται για να ξεχωρίζει τους χρήστες για 24 ώρες από την τελευταια δραστηριότητα.', 'Google Analytics', '24 ώρες'],
				['_ga_<container-id>', 'Χρησιμοποιείται για να ξεχωρίζει τους χρήστες', 'Google Analytics', '2 χρόνια'],
			]
		},
		{
			// ad_storage
			key: 'marketing_advertising',
			title: 'Cookies εμπορικής προώθησης',
			content: 'Αυτά τα cookies παρακολουθούν τη δραστηριότητά σας στο διαδίκτυο για να βοηθήσουν τους διαφημιστές να παρέχουν πιο σχετικές διαφημίσεις ή να περιορίσουν τον αριθμό των φορών που βλέπετε μια διαφήμιση. Αυτά τα cookies μπορούν να μοιραστούν αυτές τις πληροφορίες με άλλους οργανισμούς ή διαφημιστές. Είναι μόνιμα και σχεδόν πάντα προέλευσης τρίτων.',
			defaultState: 'denied',
			cookies: [
				
				['_gac_<property-id>', 'Περιέχει πληροφορίες σχετικά με προωθητικές εκστρατείες του χρήστη.', 'Google Analytics', '90 μέρες']
			]
		}
	],
	settings: {
		consentRequired: true,
		floatingButtonEnabled: true,
		debug: true,
		cookieName: '_ocmp',
	},
	consentAlwaysOn: 'Πάντα Ενεργό',
	doNotTrackText: 'Έχει ενεργοποιηθεί η λειτουργία Do Not Track απο τον Browser',
	cookieVersion: "sssyXDVquwpHXIOjLjaqEnb6PnLDumpnS0BRV2wcYHQ=",
}}));
