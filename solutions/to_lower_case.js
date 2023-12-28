"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
// ASCII Table
//capital A = 65
//capital Z = 90
//lower a = 97
//lower z = 112
function toLowerCase(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        if (char > 64 && char < 91) {
            char += 32;
            result += String.fromCharCode(char);
        }
        else {
            result += s[i];
        }
    }
    return result;
}
// One-liner
// function toLowerCase(s: string): string {
//     return s.toLowerCase()
// }
(0, assert_1.assertEqual)(toLowerCase("Hello"), "hello");
(0, assert_1.assertEqual)(toLowerCase("here"), "here");
(0, assert_1.assertEqual)(toLowerCase("LOVELY"), "lovely");
