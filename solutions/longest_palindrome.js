"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function longestPalindrome(s) {
    var charCountMap = {};
    var charLength = 0;
    var oddCount = 0;
    var lengthOfString = s.length;
    for (var i = 0; i < s.length; i++) {
        charCountMap[s[i]] = charCountMap[s[i]] ? charCountMap[s[i]] + 1 : 1;
        if (charCountMap[s[i]] % 2 == 0) {
            charLength += 2;
        }
    }
    return (lengthOfString > charLength) ? charLength + 1 : charLength;
}
(0, assert_1.assertEqual)(longestPalindrome("abccccdd"), 7);
(0, assert_1.assertEqual)(longestPalindrome("a"), 1);
(0, assert_1.assertEqual)(longestPalindrome("bb"), 2);
