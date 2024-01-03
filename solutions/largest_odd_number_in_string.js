"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function largestOddNumber(num) {
    for (var i = num.length - 1; i >= 0; i--) {
        if (+num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}
(0, assert_1.assertEqual)(largestOddNumber("52"), "5");
//The only non-empty substring are "5", "2", and "52"."5" is the only odd number.
(0, assert_1.assertEqual)(largestOddNumber("4206"), "");
//There are no odd numbers in "4206".
(0, assert_1.assertEqual)(largestOddNumber("35427"), "35427");
//"35427" is already an odd number.
