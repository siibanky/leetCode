import {assertEqual} from "../assert";

function findClosestNumber(nums: number[]): number {
    let minDistance = Number.MAX_VALUE;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        let dist = Math.abs(nums[i]);
        if (dist < minDistance) {
            minDistance = dist;
            index = i;
        } else {
            if (dist == minDistance) {
                index = nums[i] > nums[index] ? i : index;
            }
        }
    }
    return nums[index];
}


const numArray1 = [-4, -2, 1, 4, 8];
const exp1 = 1;
assertEqual(findClosestNumber(numArray1), exp1);
//The distance from -4 to 0 is (-4) = 4
//The distance from -2 to 0 is (-2) =2
//The distance from 1 to 0 is (1) =1
//The distance from 4 to 0 is (4) =4
//The distance form 8 to 0 is (8) =8
//The closest number to 0 in the array is 1

const numArray2 = [2, -1, 1];
const exp2 = 1;
assertEqual(findClosestNumber(numArray2), exp2);
//1 and -1 are both the closest numbers to 0, so 1 being larger is returned