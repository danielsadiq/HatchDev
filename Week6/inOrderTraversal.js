"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function inorderTraversal(root) {
    if (root === null) {
        return [];
    }
    const left = inorderTraversal(root.left);
    console.log(root.val);
    const right = inorderTraversal(root.right);
    return [...left, root.val, ...right];
}
;
