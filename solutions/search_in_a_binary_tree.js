"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function searchBST(root, val) {
    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    var left = searchBST(root.left, val);
    var right = searchBST(root.right, val);
    if (left !== null) {
        return left;
    }
    if (right !== null) {
        return right;
    }
    return null;
}
function constructBinaryTree(arr) {
    if (arr.length === 0) {
        return null;
    }
    var root = { val: arr[0], left: null, right: null };
    var queue = [root];
    var i = 1;
    while (i < arr.length) {
        var node = queue.shift();
        if (node) {
            if (arr[i] !== undefined) {
                node.left = { val: arr[i], left: null, right: null };
                queue.push(node.left);
            }
            i++;
            if (i < arr.length) {
                if (arr[i] !== undefined) {
                    node.right = { val: arr[i], left: null, right: null };
                    queue.push(node.right);
                }
                i++;
            }
        }
    }
    return root;
}
var arr = [4, 2, 7, 1, 3];
var root = constructBinaryTree(arr);
(0, assert_1.assertEqual)(root.val, 4);
(0, assert_1.assertEqual)(root.left.val, 2);
(0, assert_1.assertEqual)(root.right.val, 7);
(0, assert_1.assertEqual)(root.left.left.val, 1);
(0, assert_1.assertEqual)(root.left.right.val, 3);
(0, assert_1.assertEqual)(root.left.left.left, null);
(0, assert_1.assertEqual)(root.left.left.right, null);
(0, assert_1.assertEqual)(root.left.right.left, null);
(0, assert_1.assertEqual)(root.left.right.right, null);
(0, assert_1.assertEqual)(root.right.right, null);
(0, assert_1.assertEqual)(root.right.left, null);
(0, assert_1.assertEqual)(searchBST(root, 2).val, 2);
(0, assert_1.assertEqual)(searchBST(root, 5), null);
