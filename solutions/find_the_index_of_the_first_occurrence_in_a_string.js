"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function strStr(haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        for (var k = 0; k < needle.length; k++) {
            if (haystack[i + k] !== needle[k]) {
                break;
            }
            if (k === needle.length - 1) {
                return i;
            }
        }
    }
    return -1;
}
(0, assert_1.assertEqual)(strStr('sadbutsad', 'sad'), 0);
(0, assert_1.assertEqual)(strStr("leetcode", "leeto"), -1);
(0, assert_1.assertEqual)(strStr("hello", "ll"), 2);
