import {assertEqual} from "../assert";

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


function singleNumber(nums: number[]): number {
    let numArray = nums.sort((a, b) => a - b);
    let newNumber = numArray[0];
    for (let i = 0; i < numArray.length; i += 2) {
        if (numArray[i] !== numArray[i + 1]) {
            newNumber = numArray[i];
            break;
        }
    }
    return newNumber;
}


// // [1,2,2] sorted
const numArray1 = [2, 2, 1];
const exp1 = 1;
assertEqual(singleNumber(numArray1), exp1);

// [1,1,2,2,4] sorted
const numArray2 = [4, 1, 2, 1, 2];
const exp2 = 4;
assertEqual(singleNumber(numArray2), exp2);

//[1] sorted
const numArray3 = [1];
const exp3 = 1;
assertEqual(singleNumber(numArray3), exp3);