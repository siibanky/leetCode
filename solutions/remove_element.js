"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function removeElement(nums, val) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
var input1 = [3, 2, 2, 3];
(0, assert_1.assertEqual)(removeElement(input1, 3), 2);
(0, assert_1.assertEqual)(input1[0], 2);
(0, assert_1.assertEqual)(input1[1], 2);
var input2 = [0, 1, 2, 2, 3, 0, 4, 2];
(0, assert_1.assertEqual)(removeElement(input2, 2), 5);
(0, assert_1.assertEqual)(input2[0], 0);
(0, assert_1.assertEqual)(input2[1], 1);
(0, assert_1.assertEqual)(input2[2], 3);
(0, assert_1.assertEqual)(input2[3], 0);
(0, assert_1.assertEqual)(input2[4], 4);
