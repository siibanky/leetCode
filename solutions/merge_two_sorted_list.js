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
function arrayToListNode(array) {
    var headOfListNode = new ListNode(array[0]);
    var current = headOfListNode;
    for (var i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return headOfListNode;
}
function mergeTwoLists(list1, list2) {
    var headOfListNode = new ListNode();
    var current = headOfListNode;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 != null) {
        current.next = list1;
    }
    else if (list2 != null) {
        current.next = list2;
    }
    return headOfListNode.next;
}
var headNode1 = arrayToListNode([1, 2, 4]);
var headNode2 = arrayToListNode([1, 3, 4]);
var expHeadNode1 = arrayToListNode([1, 1, 2, 3, 4, 4]);
(0, assert_1.assertEqual)(mergeTwoLists(headNode1, headNode2), expHeadNode1);
(0, assert_1.assertEqual)(mergeTwoLists(null, null), null);
var headNode3 = arrayToListNode([0]);
var expHeadNode2 = arrayToListNode([0]);
(0, assert_1.assertEqual)(mergeTwoLists(null, headNode3), expHeadNode2);
