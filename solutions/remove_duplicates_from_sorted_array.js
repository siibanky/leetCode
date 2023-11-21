"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function removeDuplicates(nums) {
    var j = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}
var input1 = [1, 1, 2];
(0, assert_1.assertEqual)(removeDuplicates(input1), 2);
(0, assert_1.assertEqual)(input1[0], 1);
(0, assert_1.assertEqual)(input1[1], 2);
var input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
(0, assert_1.assertEqual)(removeDuplicates(input2), 5);
(0, assert_1.assertEqual)(input2[0], 0);
(0, assert_1.assertEqual)(input2[1], 1);
(0, assert_1.assertEqual)(input2[2], 2);
(0, assert_1.assertEqual)(input2[3], 3);
(0, assert_1.assertEqual)(input2[4], 4);
