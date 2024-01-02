"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function findClosestNumber(nums) {
    var minDistance = Number.MAX_VALUE;
    var index = -1;
    for (var i = 0; i < nums.length; i++) {
        var dist = Math.abs(nums[i]);
        if (dist < minDistance) {
            minDistance = dist;
            index = i;
        }
        else {
            if (dist == minDistance) {
                index = nums[i] > nums[index] ? i : index;
            }
        }
    }
    return nums[index];
}
var numArray1 = [-4, -2, 1, 4, 8];
var exp1 = 1;
(0, assert_1.assertEqual)(findClosestNumber(numArray1), exp1);
//The distance from -4 to 0 is (-4) = 4
//The distance from -2 to 0 is (-2) =2
//The distance from 1 to 0 is (1) =1
//The distance from 4 to 0 is (4) =4
//The distance form 8 to 0 is (8) =8
//The closest number to 0 in the array is 1
var numArray2 = [2, -1, 1];
var exp2 = 1;
(0, assert_1.assertEqual)(findClosestNumber(numArray2), exp2);
//1 and -1 are both the closest numbers to 0, so 1 being larger is returned
