"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function searchInsert(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return l;
}
(0, assert_1.assertEqual)(searchInsert([1, 3, 5, 6], 5), 2);
(0, assert_1.assertEqual)(searchInsert([1, 3, 5, 6], 2), 1);
(0, assert_1.assertEqual)(searchInsert([1, 3, 5, 6], 7), 4);
