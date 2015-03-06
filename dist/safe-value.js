;(function(root) {

	'use strict';

	var namespace = {};

	;
(function(namespace) {

    'use strict';

    function safeValue(o, str) {
        if (!str) {
            return o;
        }
        if (o == null) {
            return o;
        }

        if (typeof o !== 'object') {
            throw 'o must be an object';
        }

        return check(o, str.split('.'));
    }

    function check(o, props) {
        var prop = props.shift();

        if(o == null) {
            return null;
        }

        if(!o.hasOwnProperty(prop)) {
            return null;
        }

        if(props.length === 0) {
            return o[prop];
        }

        return check(o[prop], props);
    }

    namespace.safeValue = safeValue;

}(namespace));

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