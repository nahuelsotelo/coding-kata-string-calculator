var assert = require("assert"),
stringCalculator = require('../js/string-calculator').stringCalculator;

describe('stringCalculator', function(){
    it('should return 0 when recive an empty string', function(){
        assert.equal(0, stringCalculator(""));
    })

    // it('', function(){
    //     assert.equal(0, stringCalculator(""));
    // })
})