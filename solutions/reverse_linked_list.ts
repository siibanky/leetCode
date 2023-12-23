import {assertEqual} from "../assert";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    while (head != null) {
        let current = head;
        head = head.next;
        current.next = prev;
        prev = current;
    }
    return prev;
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

const head1 = arrayToListNode([1, 2, 3, 4, 5]);
const head2 = arrayToListNode([1, 2]);
const head3 = arrayToListNode([]);

const exHead1 = arrayToListNode([5, 4, 3, 2, 1]);
assertEqual(reverseList(head1), exHead1);

const exHead2 = arrayToListNode([2, 1]);
assertEqual(reverseList(head2), exHead2);

const exHead3 = arrayToListNode([]);
assertEqual(reverseList(head3), exHead3);