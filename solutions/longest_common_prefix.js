"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function longestCommonPrefix(strs) {
    var str = '';
    if (strs.length === 0)
        return (str);
    for (var i = 0; i < strs[0].length; i++) {
        var baseWord = strs[0][i];
        for (var k = 0; k < strs.length; k++) {
            if (baseWord === undefined || strs[k][i] !== baseWord)
                return (str);
        }
        str = str + baseWord;
    }
    return str;
}
(0, assert_1.assertEqual)(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
(0, assert_1.assertEqual)(longestCommonPrefix(['dog', 'racecar', 'car']), '');
