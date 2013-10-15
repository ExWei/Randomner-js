/**
 * Created by Alex Schafer on 15.10.13.
 */

// Numbers
exports.randInt = function (min, max) {
    // Generates random integer between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randFloat = function (min, max) {
    // Generates random float between min and max
    return Math.random() * (max - min) + min;
};

// Strings
exports.randString = function (min, max) {
    // Generates random string with length between min and max
    // Create alphabet array
    var resultString = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < exports.randInt(min, max); i++) {
        resultString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return resultString;
};

// Colors
exports.randColor = function () {
    // Generates random HEX-code of color
    // 16777215 == decimal(ffffff)
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
