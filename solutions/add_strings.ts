import {assertEqual} from "../assert";

function addStrings(num1: string, num2: string): string {
    let carry = 0;
    let result = "";
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let firstNum: number
        if (i < 0) {
            firstNum = 0;
        } else {
            firstNum = parseInt(num1.charAt(i));
        }

        let secondNum: number;
        if (j < 0) {
            secondNum = 0;
        } else {
            secondNum = parseInt(num2.charAt(j));
        }
        const sum = firstNum + secondNum + carry;
        const value = sum % 10;
        carry = Math.floor(sum / 10);
        result = value.toString() + result;
        i--;
        j--;
    }
    if (carry > 0) {
        result = carry.toString() + result;
    }
    return result;
}


assertEqual(addStrings("11", "123"), "134");
assertEqual(addStrings("456", "77"), "533");
assertEqual(addStrings("0", "0"), "0")