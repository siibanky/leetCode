import {assertEqual} from "../assert";

function findTheDifference(s: string, t: string): string {
    let charCode = t.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < t.length) {
            charCode += t.charCodeAt(i + 1) - s.charCodeAt(i)
        }
    }
    return String.fromCharCode(charCode);
}


assertEqual(findTheDifference("abcd", "abcde"), "e");
assertEqual(findTheDifference("", "y"), "y");
assertEqual(findTheDifference("sierra", "siertra"), "t");
assertEqual(findTheDifference("ea", "aea"), "a");
