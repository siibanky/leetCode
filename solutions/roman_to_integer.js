"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function romanToInt(s) {
    var romanNumberByRomanNumeral = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        var romanNumeral = s[i];
        var nextRomanNumeral = s[i + 1];
        var romanNumber = romanNumberByRomanNumeral[romanNumeral];
        var nextRomanNumber = romanNumberByRomanNumeral[nextRomanNumeral];
        if (nextRomanNumber === undefined || romanNumber >= nextRomanNumber) {
            total += romanNumber;
        }
        else {
            total -= romanNumber;
        }
    }
    return total;
}
(0, assert_1.assertEqual)(romanToInt("III"), 3);
(0, assert_1.assertEqual)(romanToInt("LVIII"), 58);
(0, assert_1.assertEqual)(romanToInt("MCMXCIV"), 1994);
