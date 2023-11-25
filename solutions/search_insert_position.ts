import {assertEqual} from "../assert";

function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}


assertEqual(searchInsert([1, 3, 5, 6], 5), 2);
assertEqual(searchInsert([1, 3, 5, 6], 2), 1);
assertEqual(searchInsert([1, 3, 5, 6], 7), 4);