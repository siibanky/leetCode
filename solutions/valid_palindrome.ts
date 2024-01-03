import {assertEqual} from "../assert";

function isPalindrome(s: string): boolean {
    let newString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for (let i = 0; i < Math.floor(newString.length / 2); i++) {
        if (newString.charAt(i) !== newString.charAt(newString.length - i - 1))
            return false;
    }
    return true;
}


const input1: string = "A Man, a plan, a canal: Panama";
const exp1: boolean = true;
assertEqual(isPalindrome(input1), exp1);
//"amanaplanacanalpanama" is a palindrome.

const input2: string = "race a car";
const exp2: boolean = false;
assertEqual(isPalindrome(input2), exp2);
//"raceacar" is not a palindrome.

const input3: string = "";
const exp3: boolean = true;
assertEqual(isPalindrome(input3), exp3);
//s is an empty string " " after removing non-alphanumeric characters.
//Since an empty string reads the same forward and backward, it is a palindrome.