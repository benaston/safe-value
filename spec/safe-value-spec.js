/*global self, describe, it, expect*/
'use strict';

var safeValue = self.safeValue;

describe('safeValue', function() {

    [
    [{}, 'foo'],
    [{bar: null}, 'foo'],
    [{bar: {}}, 'foo'],
    [{ foo: { bar: null }}, 'foo.bar.bam'] // Important test case.
    ].forEach(function(testCase) {

        it('should return null if the property is not valid for the supplied object', function() {
            //arrange & act
            var result = safeValue(testCase[0], testCase[1]);

            //assert
            expect(result).toBe(null);
        });

    });

    [
    [{foo: 1}, 'foo', 1],
    [{foo: null}, 'foo', null],
    [{foo: undefined}, 'foo', undefined],
    [{ foo: { bar: 1 }}, 'foo.bar', 1],
    [{ foo: { bar: { bam: 'bam'} }}, 'foo.bar.bam', 'bam']
    ].forEach(function(testCase) {

        it('should return the property value if the property *is* valid for the supplied object', function() {
            //arrange & act
            var result = safeValue(testCase[0], testCase[1]);

            //assert
            expect(result).toBe(testCase[2]);
        });

    });

});