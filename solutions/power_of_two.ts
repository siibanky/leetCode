import {assertEqual} from "../assert";

function isPowerOfTwo(n: number): boolean {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 2 != 0) {
            return false;
        } else {
            n = n / 2;
        }
    }
    return true;
}


assertEqual(isPowerOfTwo(1), true);
assertEqual(isPowerOfTwo(16), true);
assertEqual(isPowerOfTwo(3), false);
assertEqual(isPowerOfTwo(218), false);