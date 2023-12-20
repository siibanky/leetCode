import {assertEqual} from "../assert";

function longestPalindrome(s: string): number {
    let charCountMap = {};
    let charLength = 0;
    let oddCount =0;
    let lengthOfString = s.length;
    for (let i = 0; i < s.length; i++) {
        charCountMap[s[i]] = charCountMap[s[i]] ? charCountMap[s[i]] + 1: 1;
        if (charCountMap[s[i]]%2 ==0){
            charLength += 2;
        }

    }
    return (lengthOfString > charLength) ? charLength +1 : charLength;
}



assertEqual(longestPalindrome("abccccdd"), 7);
assertEqual(longestPalindrome("a"), 1);
assertEqual(longestPalindrome("bb"), 2);