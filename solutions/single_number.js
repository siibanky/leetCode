"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
// function singleNumber(nums: number[]): number {
//     let numArray = nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//        let newArray: number = [i];
//        let index =1;
//        if (i !== index){
//            newArray += index;
//        }else {
//            return index;
//        }
//     }
// }
function singleNumber(nums) {
    var numArray = nums.sort(function (a, b) { return a - b; });
    var newNumber = numArray[0];
    for (var i = 0; i < numArray.length; i += 2) {
        if (numArray[i] !== numArray[i + 1]) {
            newNumber = numArray[i];
            break;
        }
    }
    return newNumber;
}
// // [1,2,2] sorted
var numArray1 = [2, 2, 1];
var exp1 = 1;
(0, assert_1.assertEqual)(singleNumber(numArray1), exp1);
// [1,1,2,2,4] sorted
var numArray2 = [4, 1, 2, 1, 2];
var exp2 = 4;
(0, assert_1.assertEqual)(singleNumber(numArray2), exp2);
//[1] sorted
var numArray3 = [1];
var exp3 = 1;
(0, assert_1.assertEqual)(singleNumber(numArray3), exp3);
