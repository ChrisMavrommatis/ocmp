// Permissions
const log = require('logToConsole');
const sha256 = require('sha256');
const call = require('callInWindow');

// Constants
const CONSTANTS ={
  DATA_VERSION: 1,
  INIT_EVENT_NAME: 'ocmp_init_gtm',
  INIT_FUNCTION_PATH: 'OCMP.Initialize',
  CONSENTS : {
    STRICTLY_NECESSARY: 'strictly_necessary',
    PREFERENCES_FUNCTIONALITY: 'preferences_functionality',
    STATISTICS_PERFORMANCE: 'statistics_performance',
    MARKETING_ADVERTISING: 'marketing_advertising'
  }
};



// Functions
function mapCookies(key){
   if(data.cookies && data.cookies.length > 0){
     var filteredCookies = data.cookies.filter((cookie) => cookie.cookieCategory === key);
     if(filteredCookies && filteredCookies.length > 0){
      return filteredCookies.map((cookie) => [cookie.cookieName, cookie.cookieDescription, cookie.cookieProvenance, cookie.cookieDuration]); 
     }
   }
}

function getCookieNames(){
  if(data.cookies && data.cookies.length > 0){
    return data.cookies.map((cookie) => cookie.cookieName);
  }
}

function createFloatingButtonData(){
 if(data.floatingButtonUseRawHtmlInsteadofSvg){
  return {
    html: data.floatingButtonRawHtml
  };
 } 
  
 return {
   svg: {
     viewBox: data.floatingButtonSvgViewBox,
     g: {
       path: {
         stroke: data.floatingButtonSvgStroke,
         fill: data.floatingButtonSvgFill,
         d: data.floatingButtonSvgPath
       }
     }
   }
 };
  
}

function INIT_OCMP(cookiesVersionHash){
  if(cookiesVersionHash){
    log('GTM OCMP Data: Auto Calculating Cookies Digest = ', cookiesVersionHash);
    ocmp_data.cookiesVersion = cookiesVersionHash;
  }
  
  log('GTM OCMP Data: Calling = ', CONSTANTS.INIT_EVENT_NAME);
  log('GTM OCMP Data: ocmp_data = ', ocmp_data);
  call(CONSTANTS.INIT_FUNCTION_PATH, ocmp_data);
  
  // Call data.gtmOnSuccess when the tag is finished.
  log('GTM OCMP Data: Success');
  data.gtmOnSuccess();
}


const ocmp_data = {
  version : CONSTANTS.DATA_VERSION,
  bar: {
	title: data.barTitle,
	description: data.barDescription
  },
  modal: {
	title: data.modalTitle,
	description: data.modalDescription
  },
  buttons: {
    acceptAll: data.buttonAcceptAll,
    settings: data.buttonSettings,
    save: data.buttonSave,
    cancel: data.buttonCancel
  },
  cookiesTable: {
    cookieName: data.cookieName,
    cookiePurpose: data.cookiePurpose,
	cookieProvenance: data.cookieProvenance,
	cookieDuration: data.cookieDuration
  },
  floatingButton: createFloatingButtonData(),
  consents: [
    {
	  // essential_storage & security_storage
      key: CONSTANTS.CONSENTS.STRICTLY_NECESSARY,
	  title: data.strictlyNecessaryTitle,
	  content: data.strictlyNecessaryDescription,
	  alwaysOn: true,
	  cookies: mapCookies(CONSTANTS.CONSENTS.STRICTLY_NECESSARY)
    },
    {
	  //functionality_storage & personalization_storage
	  key: CONSTANTS.CONSENTS.PREFERENCES_FUNCTIONALITY,
	  title: data.preferencesFunctionalityTitle,
	  content: data.preferencesFunctionalityDescription,
	  defaultState: data.preferencesFunctionalityDefaultState,
	  cookies: mapCookies(CONSTANTS.CONSENTS.PREFERENCES_FUNCTIONALITY)
    },
    {
  	  // analytics_storage
      key: CONSTANTS.CONSENTS.STATISTICS_PERFORMANCE,
  	  title: data.statisticsPerformanceTitle,
  	  content: data.statisticsPerformanceDescription,
  	  defaultState: data.statisticsPerformanceDefaultState,
  	  cookies: mapCookies(CONSTANTS.CONSENTS.STATISTICS_PERFORMANCE)
    },
    {
	  // ad_storage
	  key: CONSTANTS.CONSENTS.MARKETING_ADVERTISING,
	  title: data.marketingAdvertisingTitle,
	  content: data.marketingAdvertisingDescription,
	  defaultState: data.marketingAdvertisingDefaultState,
	  cookies: mapCookies(CONSTANTS.CONSENTS.MARKETING_ADVERTISING)
    }
  ],
  settings: {
    consentRequired: data.consentRequired,
    floatingButtonEnabled: data.floatingButtonEnabled,
    debug: data.debugModeEnabled,
    cookieName: data.actualCookieName,
  },
  consentAlwaysOn: data.consentAlwaysOn,
  doNotTrackText: data.consentDoNotTrack,
  cookiesVersion: data.cookiesVersion
};


if(data.useAutoCalculatingCookiesVersion) {
  log('GTM OCMP Data: Using Auto Calculating Cookies Version');
  var cookieNames = getCookieNames().join('|');
  sha256(cookieNames, INIT_OCMP, data.gtmOnFailure);
} else {
  log('GTM OCMP Data: Normal Init');
  INIT_OCMP();
}
