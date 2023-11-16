"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function isValid(s) {
    var allValidParentheses = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    if (s.length < 2) {
        return false;
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char == "(" || char == "[" || char == "{") {
            stack.push(char);
        }
        else {
            var lastOpeningBracket = stack.pop();
            var closingBracket = allValidParentheses[lastOpeningBracket];
            if (closingBracket !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
(0, assert_1.assertEqual)(isValid("()"), true);
(0, assert_1.assertEqual)(isValid("()[]()"), true);
(0, assert_1.assertEqual)(isValid("(]"), false);
(0, assert_1.assertEqual)(isValid("()[{"), false);
(0, assert_1.assertEqual)(isValid("([{}])"), true);
(0, assert_1.assertEqual)(isValid("([{]})"), false);
(0, assert_1.assertEqual)(isValid("(())"), true);
(0, assert_1.assertEqual)(isValid("[[]"), false);
