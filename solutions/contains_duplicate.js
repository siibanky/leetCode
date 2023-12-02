"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function containsDuplicate(nums) {
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i <= nums.length - 1; i++) {
        var first = nums[i];
        var second = nums[i + 1];
        if (first === second) {
            return true;
        }
    }
    return false;
}
(0, assert_1.assertEqual)(containsDuplicate([1, 2, 3, 1]), true);
(0, assert_1.assertEqual)(containsDuplicate([1, 2, 3, 4]), false);
(0, assert_1.assertEqual)(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
(0, assert_1.assertEqual)(containsDuplicate([0]), false);
(0, assert_1.assertEqual)(containsDuplicate([2, 14, 18, 22, 22]), true);
