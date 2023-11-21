import {assertEqual} from "../assert";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function arrayToListNode(array: number[]) {
    let headOfListNode = new ListNode(array[0]);
    let current = headOfListNode;
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return headOfListNode;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let headOfListNode: ListNode = new ListNode();
    let current = headOfListNode;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next;
    }
    if (list1 != null) {
        current.next = list1
    } else if (list2 != null) {
        current.next = list2
    }
    return headOfListNode.next;
}

const headNode1 = arrayToListNode([1,2,4]);
const headNode2 = arrayToListNode([1,3,4]);
const expHeadNode1 = arrayToListNode([1,1,2,3,4,4])
assertEqual(mergeTwoLists(headNode1, headNode2), expHeadNode1);


assertEqual(mergeTwoLists(null, null), null);

const headNode3 = arrayToListNode([0]);
const expHeadNode2 = arrayToListNode([0]);
assertEqual(mergeTwoLists(null, headNode3), expHeadNode2);