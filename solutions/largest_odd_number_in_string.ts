import {assertEqual} from "../assert";

function largestOddNumber(num: string): string {
    for (let i = num.length - 1; i >= 0; i--) {
        if (+num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}


assertEqual(largestOddNumber("52"), "5");
//The only non-empty substring are "5", "2", and "52"."5" is the only odd number.

assertEqual(largestOddNumber("4206"), "");
//There are no odd numbers in "4206".

assertEqual(largestOddNumber("35427"), "35427");
//"35427" is already an odd number.