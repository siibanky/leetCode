import {assertEqual} from "../assert";

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    let left = searchBST(root.left, val);
    let right = searchBST(root.right, val);
    if (left !== null) {
        return left;
    }
    if (right !== null) {
        return right;
    }
    return null;
}


function constructBinaryTree(arr: number[]): TreeNode | null {
    if (arr.length === 0) {
        return null;
    }
    let root: TreeNode = {val: arr[0], left: null, right: null};
    let queue: TreeNode[] = [root];
    let i = 1;
    while (i < arr.length) {
        let node = queue.shift();
        if (node) {
            if (arr[i] !== undefined) {
                node.left = {val: arr[i], left: null, right: null};
                queue.push(node.left);
            }
            i++;
            if (i < arr.length) {
                if (arr[i] !== undefined) {
                    node.right = {val: arr[i], left: null, right: null}
                    queue.push(node.right);
                }
                i++
            }
        }
    }
    return root;
}

let arr = [4, 2, 7, 1, 3];
let root = constructBinaryTree(arr);
assertEqual(root.val, 4);
assertEqual(root.left.val, 2);
assertEqual(root.right.val, 7);
assertEqual(root.left.left.val, 1);
assertEqual(root.left.right.val, 3);
assertEqual(root.left.left.left, null);
assertEqual(root.left.left.right, null);
assertEqual(root.left.right.left, null);
assertEqual(root.left.right.right, null);
assertEqual(root.right.right, null);
assertEqual(root.right.left, null);


assertEqual(searchBST(root, 2).val, 2);
assertEqual(searchBST(root, 5), null);
