import {assertEqual} from "../assert";

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; 1 < nums.length; i++) {
        for (let k = i + 1; 1 < nums.length; k++) {
            const numA= nums[i]
            const numB= nums[k]
            if (nums[i] + nums[k] == target) {
                return (
                    [i,k ]
                )
            }
        }
    }
};



// function twoSum(nums: number[], target: number): number[] {
// const dictionary ={}
//      for (let i =0; 1< nums.length; i++) {
//          const difference = target-nums[i]
//          if (difference in dictionary) return[dictionary[difference], i]
//          dictionary[nums[i]] =i;
//      }
//
// }

assertEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assertEqual(twoSum([3, 2, 4], 6), [1, 2]);
assertEqual(twoSum([3, 3], 6), [0, 1]);