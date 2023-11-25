import {assertEqual} from "../assert";

function strStr(haystack: string, needle: string): number {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (let k = 0; k < needle.length; k++) {
            if (haystack[i + k] !== needle[k]) {
                break;
            }
            if (k === needle.length - 1) {
                return i;
            }
        }
    }
    return -1;
}

assertEqual(strStr('sadbutsad', 'sad'), 0);
assertEqual(strStr("leetcode", "leeto"), -1);
assertEqual(strStr("hello", "ll"), 2);