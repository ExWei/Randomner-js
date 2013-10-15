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

describe('randHexColor test', function () {
    it('Should contain #', function () {
        var randomColor = randomner.randHexColor();
        randomColor.should.contain('#');
    });
    it('Length should be 7', function () {
        var randomColor = randomner.randHexColor();
        randomColor.length.should.equal(7);
    });
});

describe('randRgbColor test', function () {
    it('Should be Object', function () {
        var randomColor = randomner.randRgbColor();
        (typeof(randomColor)).should.equal("object");
    });
    it('Values not be undefined', function () {
        var randomColor = randomner.randRgbColor();
        randomColor["r"].should.not.equal("undefined");
        randomColor["g"].should.not.equal("undefined");
        randomColor["b"].should.not.equal("undefined");
    });
});