"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function addBinary(a, b) {
    var _a;
    _a = addZeroCushion(a, b), a = _a[0], b = _a[1];
    var carry = 0;
    var rtn = [];
    for (var i = a.length - 1; i >= 0; i--) {
        var first = parseInt(a[i]);
        var second = parseInt(b[i]);
        var sum = first + second + carry;
        var isOdd = sum % 2 !== 0;
        var value = isOdd ? "1" : "0";
        rtn.push(value);
        carry = sum > 1 ? 1 : 0;
    }
    if (carry > 0) {
        rtn.push(carry.toString());
    }
    return rtn.reverse().join("");
}
function addZeroCushion(x, y) {
    if (x.length < y.length) {
        var _a = addZeroCushion(y, x), first = _a[0], second = _a[1];
        return [second, first];
    }
    var resultOne = x;
    var resultTwo = y;
    var zeroCount = x.length - y.length;
    for (var i = 0; i < zeroCount; i++) {
        resultTwo = "0" + resultTwo;
    }
    return [resultOne, resultTwo];
}
var actual0 = addZeroCushion("11111", "11");
(0, assert_1.assertEqual)(actual0, ["11111", "00011"]);
(0, assert_1.assertEqual)(addZeroCushion("11", "11111"), ["00011", "11111"]);
(0, assert_1.assertEqual)(addZeroCushion("1001", "1001"), ["1001", "1001"]);
(0, assert_1.assertEqual)(addBinary("11", "1"), "100");
(0, assert_1.assertEqual)(addBinary("1010", "1011"), "10101");
(0, assert_1.assertEqual)(addBinary("01", "01"), "10");
