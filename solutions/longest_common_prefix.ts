import {assertEqual} from "../assert";

function longestCommonPrefix(strs: string[]): string {
    let str = '';
    if (strs.length === 0)
        return (str);
    for (let i = 0; i < strs[0].length; i++) {
        const baseWord = strs[0][i]
        for (let k = 0; k < strs.length; k++) {
            if (baseWord === undefined || strs[k][i] !== baseWord)
                return (str);
        }
        str = str + baseWord
    }
    return str;
}


assertEqual(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assertEqual(longestCommonPrefix(['dog', 'racecar', 'car']), '');
