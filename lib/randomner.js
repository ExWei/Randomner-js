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
exports.randHexColor = function () {
    // Generates random HEX-code of color
    // 16777215 == decimal(ffffff)
    return '#' + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
};

exports.randRgbColor = function () {
    // Generates random json of rgb-color
    return {"r": exports.randInt(0, 255), "g": exports.randInt(0, 255), "b": exports.randInt(0, 255)};
};

// Web
// Define all tlds
var tlds = ["aero", "biz", "cat", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum",
    "name", "net", "org", "travel", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw",
    "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca",
    "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cs", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm",
    "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh",
    "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im",
    "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb",
    "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq",
    "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu",
    "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "ru", "rw",
    "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tf",
    "tg", "th", "tj", "tk", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc",
    "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "yu", "za", "zm", "zr", "zw", "me"];

exports.randTld = function () {
    // Generates random Top-level zone
    return tlds[exports.randInt(0, tlds.length - 1)]
};

exports.randDomain = function (options) {
    // Generates random Top-level domain
    return (exports.randString(options.min, options.max) + "." + exports.randTld()).toLowerCase();
};

exports.randEmail = function (options) {
    // Generates random email
    return (exports.randString(options.min, options.max) + "@" + exports.randString(options.min, options.max) + "." + exports.randTld()).toLowerCase();
};

exports.randIpv4Ip = function() {
    // Generates random IPv4 address
    return (exports.randInt(0,255) + "." + exports.randInt(0,255) + "." + exports.randInt(0,255) + "." + exports.randInt(0,255))
};

exports.randTimeAmPm = function() {
    // Return pm or am
    return exports.randInt(0,1) === 1 ? "am" : "pm"
};

exports.randMonth = function() {
    // Generates random month
    var months = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"];
    return months[exports.randInt(0, months.length)];
};

exports.randTimeStamp = function() {
    // Generates random timestamp
    return exports.randInt(21600, 2147493600);
};

exports.randDateTime = function() {
    // Generates JavaScript object Date with random DateTime
    return new Date(exports.randTimeStamp()*1000);
};
