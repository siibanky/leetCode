"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function lengthOfLastWord(s) {
    var length = 0;
    var i = s.length - 1;
    while (i >= 0) {
        if (s[i] == " ") {
            if (length > 0) {
                break;
            }
        }
        else {
            length += 1;
        }
        i -= 1;
    }
    return length;
}
(0, assert_1.assertEqual)(lengthOfLastWord("Hello World"), 5);
(0, assert_1.assertEqual)(lengthOfLastWord("   fly me   to   the moon  "), 4);
(0, assert_1.assertEqual)(lengthOfLastWord("luffy is still joyboy"), 6);
