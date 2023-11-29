import {assertEqual} from "../assert";

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits]
}


assertEqual(plusOne([1, 2, 3]), [1, 2, 4]);
assertEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
assertEqual(plusOne([9]), [1, 0]);