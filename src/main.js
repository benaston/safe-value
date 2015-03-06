;(function(root) {

	'use strict';

	var namespace = {};

	@@safe-value

	if ((typeof exports === 'object') && module) {
		module.exports = namespace.safeValue; // CommonJS
	} else if ((typeof define === 'function') && define.amd) {
		define(function() {
			return namespace.safeValue;
		}); // AMD
	} else {
		root.safeValue = namespace.safeValue; // Browser
	}

}(this));