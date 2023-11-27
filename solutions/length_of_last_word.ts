import {assertEqual} from "../assert";

function lengthOfLastWord(s: string): number {
    let length = 0;
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] == " ") {
            if (length > 0) {
                break;
            }
        } else {
            length += 1
        }
        i -= 1;
    }
    return length;
}


assertEqual(lengthOfLastWord("Hello World"), 5);
assertEqual(lengthOfLastWord("   fly me   to   the moon  "), 4);
assertEqual(lengthOfLastWord("luffy is still joyboy"), 6);