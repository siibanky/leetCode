import {assertEqual} from "../assert";

function bitwiseComplement(n: number): number {
    let sum = 1;
    while (n > sum) {
        sum = sum * 2 + 1;
    }
    return sum - n;
}


//5 is "101" in binary, with complement "010" in binary, which is 2 in base-10
assertEqual(bitwiseComplement(5), 2);
//7 is "111" in binary, with complement "000" in binary, which is 0 in base-10
assertEqual(bitwiseComplement(7), 0);
// 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10
assertEqual(bitwiseComplement(10), 5);