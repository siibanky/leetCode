import {assertEqual} from "../assert";

function removeElement(nums: number[], val: number): number {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i]
            index++
        }
    }
    return index;
}


const input1 = [3, 2, 2, 3];
assertEqual(removeElement(input1, 3), 2);
assertEqual(input1[0], 2);
assertEqual(input1[1], 2);

const input2 = [0, 1, 2, 2, 3, 0, 4, 2];
assertEqual(removeElement(input2, 2), 5);
assertEqual(input2[0], 0);
assertEqual(input2[1], 1);
assertEqual(input2[2], 3);
assertEqual(input2[3], 0);
assertEqual(input2[4], 4);
