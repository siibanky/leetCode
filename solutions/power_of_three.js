"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function isPowerOfThree(n) {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 3 != 0) {
            return false;
        }
        else {
            n = n / 3;
        }
    }
    return true;
}
(0, assert_1.assertEqual)(isPowerOfThree(27), true);
(0, assert_1.assertEqual)(isPowerOfThree(0), false);
(0, assert_1.assertEqual)(isPowerOfThree(-1), false);
