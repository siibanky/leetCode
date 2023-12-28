import {assertEqual} from "../assert";

// ASCII Table
//capital A = 65
//capital Z = 90
//lower a = 97
//lower z = 112
function toLowerCase(s: string): string {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        if (char > 64 && char < 91) {
            char += 32;
            result += String.fromCharCode(char);
        } else {
            result += s[i];
        }
    }
    return result;
}

// One-liner
// function toLowerCase(s: string): string {
//     return s.toLowerCase()
// }


assertEqual(toLowerCase("Hello"), "hello");
assertEqual(toLowerCase("here"), "here");
assertEqual(toLowerCase("LOVELY"), "lovely");