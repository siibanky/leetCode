"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function twoSum(nums, target) {
    for (var i = 0; 1 < nums.length; i++) {
        for (var k = i + 1; 1 < nums.length; k++) {
            var numA = nums[i];
            var numB = nums[k];
            if (nums[i] + nums[k] == target) {
                return ([i, k]);
            }
        }
    }
}
;
// function twoSum(nums: number[], target: number): number[] {
// const dictionary ={}
//      for (let i =0; 1< nums.length; i++) {
//          const difference = target-nums[i]
//          if (difference in dictionary) return[dictionary[difference], i]
//          dictionary[nums[i]] =i;
//      }
//
// }
(0, assert_1.assertEqual)(twoSum([2, 7, 11, 15], 9), [0, 1]);
(0, assert_1.assertEqual)(twoSum([3, 2, 4], 6), [1, 2]);
(0, assert_1.assertEqual)(twoSum([3, 3], 6), [0, 1]);
