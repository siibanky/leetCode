"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function findTheDifference(s, t) {
    var charCode = t.charCodeAt(0);
    for (var i = 0; i < s.length; i++) {
        if (i + 1 < t.length) {
            charCode += t.charCodeAt(i + 1) - s.charCodeAt(i);
        }
    }
    return String.fromCharCode(charCode);
}
(0, assert_1.assertEqual)(findTheDifference("abcd", "abcde"), "e");
(0, assert_1.assertEqual)(findTheDifference("", "y"), "y");
(0, assert_1.assertEqual)(findTheDifference("sierra", "siertra"), "t");
(0, assert_1.assertEqual)(findTheDifference("ea", "aea"), "a");
