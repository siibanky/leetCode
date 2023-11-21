import {assertEqual} from "../assert";

function removeDuplicates(nums: number[]): number {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j;
}


const input1 = [1, 1, 2]
assertEqual(removeDuplicates(input1), 2);
assertEqual(input1[0], 1);
assertEqual(input1[1], 2);
const input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
assertEqual(removeDuplicates(input2), 5);
assertEqual(input2[0], 0)
assertEqual(input2[1], 1)
assertEqual(input2[2], 2)
assertEqual(input2[3], 3)
assertEqual(input2[4], 4)
