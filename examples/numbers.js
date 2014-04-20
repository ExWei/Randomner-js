var randomner = require("../lib/randomner.js");

var intBetween2And8 = randomner.randInt(2, 8);
console.log(intBetween2And8);
var floatBetween2And8 = randomner.randFloat(2, 8);
console.log(floatBetween2And8);