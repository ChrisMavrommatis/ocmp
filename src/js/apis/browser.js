(function (global, factory){
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (function () {
    var current = global.Browser;
    var exports = global.Browser = factory();
    exports.noConflict = function () { global.Browser = current; return exports; };
  }()));
})(this, (function() {

	function init(){
		function doNotTrackSupported() {
			return !!(window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external);
		}
		
		function doNotTrackEnabled() {
			return window.doNotTrack === '1' || navigator.doNotTrack === 'yes' || navigator.doNotTrack === '1' || navigator.msDoNotTrack === '1' || ('msTrackingProtectionEnabled' in window.external && window.external.msTrackingProtectionEnabled());
		}

		return Object.create({
			doNotTrackSupported: doNotTrackSupported,
			doNotTrackEnabled: doNotTrackEnabled
		})
	}

	var api = init();
	return api;
}));
