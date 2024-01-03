"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function isPalindrome(s) {
    var newString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for (var i = 0; i < Math.floor(newString.length / 2); i++) {
        if (newString.charAt(i) !== newString.charAt(newString.length - i - 1))
            return false;
    }
    return true;
}
var input1 = "A Man, a plan, a canal: Panama";
var exp1 = true;
(0, assert_1.assertEqual)(isPalindrome(input1), exp1);
//"amanaplanacanalpanama" is a palindrome.
var input2 = "race a car";
var exp2 = false;
(0, assert_1.assertEqual)(isPalindrome(input2), exp2);
//"raceacar" is not a palindrome.
var input3 = "";
var exp3 = true;
(0, assert_1.assertEqual)(isPalindrome(input3), exp3);
//s is an empty string " " after removing non-alphanumeric characters.
//Since an empty string reads the same forward and backward, it is a palindrome.
