"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function isPowerOfTwo(n) {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 2 != 0) {
            return false;
        }
        else {
            n = n / 2;
        }
    }
    return true;
}
(0, assert_1.assertEqual)(isPowerOfTwo(1), true);
(0, assert_1.assertEqual)(isPowerOfTwo(16), true);
(0, assert_1.assertEqual)(isPowerOfTwo(3), false);
(0, assert_1.assertEqual)(isPowerOfTwo(218), false);
