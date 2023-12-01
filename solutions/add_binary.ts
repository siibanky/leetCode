import {assertEqual} from "../assert";

function addBinary(a: string, b: string): string {
    [a, b] = addZeroCushion(a, b);

    let carry = 0;
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        const first = parseInt(a[i]);
        const second = parseInt(b[i]);
        const sum = first + second + carry;
        const isOdd = sum % 2 !== 0;
        const value = isOdd ? "1" : "0";
        result = value + result;
        carry = sum > 1 ? 1 : 0;
    }
    return carry == 0 ? result : carry + result;
}


function addZeroCushion(x: string, y: string): [string, string] {
    if (x.length < y.length) {
        const [first, second] = addZeroCushion(y, x);
        return [second, first];
    }
    let resultOne = x;
    let resultTwo = y;
    const zeroCount = x.length - y.length;
    for (let i = 0; i < zeroCount; i++) {
        resultTwo = "0" + resultTwo;
    }
    return [resultOne, resultTwo];
}


const actual0 = addZeroCushion("11111", "11");
assertEqual(actual0, ["11111", "00011"]);
assertEqual(addZeroCushion("11", "11111"), ["00011", "11111"]);
assertEqual(addZeroCushion("1001", "1001"), ["1001", "1001"]);

assertEqual(addBinary("11", "1"), "100");
assertEqual(addBinary("1010", "1011"), "10101");
assertEqual(addBinary("01", "01"), "10");