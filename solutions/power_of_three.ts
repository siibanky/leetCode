import {assertEqual} from "../assert";

function isPowerOfThree(n: number): boolean {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 3 != 0) {
            return false
        } else {
            n = n / 3
        }
    }
    return true;
}


assertEqual(isPowerOfThree(27), true);
assertEqual(isPowerOfThree(0), false);
assertEqual(isPowerOfThree(-1), false);