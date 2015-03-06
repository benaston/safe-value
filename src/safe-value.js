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