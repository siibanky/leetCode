"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function greatestLetter(s) {
    var chars = new Set(s);
    var maxChar = "";
    for (var i = 0; i < s.length; i++) {
        var lowerChar = s[i].toLowerCase();
        var upperChar = s[i].toUpperCase();
        if (chars.has(lowerChar) && chars.has(upperChar)) {
            if (upperChar > maxChar) {
                maxChar = upperChar;
            }
        }
    }
    return maxChar;
}
// An English letter 'b' is greater than another letter 'a' if 'b' appears after 'a' in English alphabet.
(0, assert_1.assertEqual)(greatestLetter("lEeTcOdE"), "E");
//The letter 'E' is the only letter to appear in lower and upper case.
(0, assert_1.assertEqual)(greatestLetter("arRAzFif"), "R");
//The letter 'R' is the greatest letter to appear in both lower and upper case.
//Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' and 'A'
(0, assert_1.assertEqual)(greatestLetter("AbCdEfGhIjK"), "");
// There is no letter that appears in both lower and upper case.
