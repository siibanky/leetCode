"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function reverseList(head) {
    var prev = null;
    while (head != null) {
        var current = head;
        head = head.next;
        current.next = prev;
        prev = current;
    }
    return prev;
}
function arrayToListNode(array) {
    var headOfListNode = new ListNode(array[0]);
    var current = headOfListNode;
    for (var i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return headOfListNode;
}
var head1 = arrayToListNode([1, 2, 3, 4, 5]);
var head2 = arrayToListNode([1, 2]);
var head3 = arrayToListNode([]);
var exHead1 = arrayToListNode([5, 4, 3, 2, 1]);
(0, assert_1.assertEqual)(reverseList(head1), exHead1);
var exHead2 = arrayToListNode([2, 1]);
(0, assert_1.assertEqual)(reverseList(head2), exHead2);
var exHead3 = arrayToListNode([]);
(0, assert_1.assertEqual)(reverseList(head3), exHead3);
