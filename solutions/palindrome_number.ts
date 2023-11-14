import {assertEqual} from "../assert";

// function isPalindrome(x: number): boolean {
//     let stringX = String(x);
//     return (
//         x.toString().split("").reverse().join("") == stringX
//     );
// }


function isPalindrome(x: number): boolean {
    let xStr = String(x);
    let startIndex = 0;
    let endIndex = xStr.length - 1;
    while (startIndex < endIndex) {
        const startChar = xStr.charAt(startIndex);
        const endChar = xStr.charAt(endIndex);
        if (startChar !== endChar) {
            return false;
        }
        startIndex++
        endIndex--
    }
    return true;
}

assertEqual(isPalindrome(121), true);
assertEqual(isPalindrome(-121), false);
assertEqual(isPalindrome(10), false);
