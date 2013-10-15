/**
 * Created by Alex on 15.10.13.
 */
var randomner = require("../lib/randomner.js");

describe('randInt test', function () {
    it('Should be equal to 5', function () {
        var randomInteger = randomner.randInt(5, 5);
        randomInteger.should.equal(5);
    });
});

describe('randFloat test', function () {
    it('Should be equal to 5.4', function () {
        var randomInteger = randomner.randFloat(5.40, 5.40);
        randomInteger.should.equal(5.40);
    });
});

describe('randString test', function () {
    it('Length should be equal to 40', function () {
        var randomString = randomner.randString(40, 40);
        randomString.length.should.equal(40);
    });
});

describe('randColor test', function () {
    it('Should contain #', function () {
        var randomColor = randomner.randColor();
        randomColor.should.contain('#');
    });
    it('Length should be 7', function () {
        var randomColor = randomner.randColor();
        randomColor.length.should.equal(7);
    });
});