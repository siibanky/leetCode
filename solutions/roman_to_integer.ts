import {assertEqual} from "../assert";

function romanToInt(s: string): number {
    const romanNumberByRomanNumeral= {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const romanNumeral= s[i];
        const nextRomanNumeral = s[i + 1]
        const romanNumber= romanNumberByRomanNumeral[romanNumeral]
        const nextRomanNumber= romanNumberByRomanNumeral[nextRomanNumeral]
        if (nextRomanNumber === undefined || romanNumber >= nextRomanNumber) {
            total += romanNumber
        } else {
            total -= romanNumber
        }
    }
    return total;
}

assertEqual(romanToInt("III"), 3);
assertEqual(romanToInt("LVIII"), 58);
assertEqual(romanToInt("MCMXCIV"), 1994);