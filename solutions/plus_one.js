"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    return __spreadArray([1], digits, true);
}
(0, assert_1.assertEqual)(plusOne([1, 2, 3]), [1, 2, 4]);
(0, assert_1.assertEqual)(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
(0, assert_1.assertEqual)(plusOne([9]), [1, 0]);
