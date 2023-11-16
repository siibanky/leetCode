import {assertEqual} from "../assert";

function isValid(s: string): boolean {
    const allValidParentheses = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    if (s.length < 2) {
        return false;
    }
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char == "(" || char == "[" || char == "{") {
            stack.push(char)
        } else {
            const lastOpeningBracket = stack.pop()
            const closingBracket = allValidParentheses[lastOpeningBracket]
            if (closingBracket !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

assertEqual(isValid("()"), true);
assertEqual(isValid("()[]()"), true);
assertEqual(isValid("(]"), false);
assertEqual(isValid("()[{"), false);
assertEqual(isValid("([{}])"), true);
assertEqual(isValid("([{]})"), false);
assertEqual(isValid("(())"), true);
assertEqual(isValid("[[]"), false);
