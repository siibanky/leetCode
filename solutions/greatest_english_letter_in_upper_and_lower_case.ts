import {assertEqual} from "../assert";

function greatestLetter(s: string): string {
    let chars = new Set(s);
    let maxChar = "";
    for (let i = 0; i < s.length; i++) {
        let lowerChar = s[i].toLowerCase();
        let upperChar = s[i].toUpperCase();
        if (chars.has(lowerChar) && chars.has(upperChar)) {
            if (upperChar > maxChar) {
                maxChar = upperChar
            }
        }
    }
    return maxChar;
}


// An English letter 'b' is greater than another letter 'a' if 'b' appears after 'a' in English alphabet.
assertEqual(greatestLetter("lEeTcOdE"), "E");
//The letter 'E' is the only letter to appear in lower and upper case.
assertEqual(greatestLetter("arRAzFif"), "R");
//The letter 'R' is the greatest letter to appear in both lower and upper case.
//Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' and 'A'
assertEqual(greatestLetter("AbCdEfGhIjK"), "");
// There is no letter that appears in both lower and upper case.