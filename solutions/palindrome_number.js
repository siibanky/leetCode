"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
// function isPalindrome(x: number): boolean {
//     let stringX = String(x);
//     return (
//         x.toString().split("").reverse().join("") == stringX
//     );
// }
function isPalindrome(x) {
    var xStr = String(x);
    var startIndex = 0;
    var endIndex = xStr.length - 1;
    while (startIndex < endIndex) {
        var startChar = xStr.charAt(startIndex);
        var endChar = xStr.charAt(endIndex);
        if (startChar !== endChar) {
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
}
(0, assert_1.assertEqual)(isPalindrome(121), true);
(0, assert_1.assertEqual)(isPalindrome(-121), false);
(0, assert_1.assertEqual)(isPalindrome(10), false);
