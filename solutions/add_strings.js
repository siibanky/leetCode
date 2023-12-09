"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function addStrings(num1, num2) {
    var carry = 0;
    var result = "";
    var i = num1.length - 1;
    var j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        var firstNum = void 0;
        if (i < 0) {
            firstNum = 0;
        }
        else {
            firstNum = parseInt(num1.charAt(i));
        }
        var secondNum = void 0;
        if (j < 0) {
            secondNum = 0;
        }
        else {
            secondNum = parseInt(num2.charAt(j));
        }
        var sum = firstNum + secondNum + carry;
        var value = sum % 10;
        carry = Math.floor(sum / 10);
        result = value.toString() + result;
        i--;
        j--;
    }
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;
}
(0, assert_1.assertEqual)(addStrings("11", "123"), "134");
(0, assert_1.assertEqual)(addStrings("456", "77"), "533");
(0, assert_1.assertEqual)(addStrings("0", "0"), "0");
