import {assertEqual} from "../assert";

function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 1; i++) {
        let first = nums[i];
        let second = nums[i + 1];
        if (first === second) {
            return true;
        }
    }
    return false;
}


assertEqual(containsDuplicate([1, 2, 3, 1]), true);
assertEqual(containsDuplicate([1, 2, 3, 4]), false);
assertEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
assertEqual(containsDuplicate([0]), false);
assertEqual(containsDuplicate([2, 14, 18, 22, 22]), true);