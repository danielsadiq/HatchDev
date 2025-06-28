"use strict";
class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BSTree {
    constructor(root = null) {
        this.root = root;
    }
    addNode(val) {
        var _a, _b;
        const newNode = new BSTNode(val);
        let curr = this.root;
        if (this.root === null) {
            this.root = newNode;
        }
        while (curr) {
            if (val > ((_a = this.root) === null || _a === void 0 ? void 0 : _a.val)) {
                if ((curr === null || curr === void 0 ? void 0 : curr.right) === null) {
                    curr.right = newNode;
                    return;
                }
                curr = curr.right;
            }
            if (val < ((_b = this.root) === null || _b === void 0 ? void 0 : _b.val)) {
                if ((curr === null || curr === void 0 ? void 0 : curr.left) === null) {
                    curr.left = newNode;
                    return;
                }
                curr = curr.left;
            }
            if (val == this.root.val) {
                console.log(this.root.val);
            }
        }
    }
    deleteNode(root, val) {
        if (root == null)
            return null;
        if (root.val = val) {
            if (root.left == null && root.right == null) {
                return null;
            }
            else if (root.left == null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }
            while (root.left !== null) {
            }
        }
    }
    search(val) {
        var _a, _b, _c, _d;
        let curr = this.root;
        if (this.root === null) {
            return;
        }
        while (curr) {
            if (val > ((_a = this.root) === null || _a === void 0 ? void 0 : _a.val)) {
                curr = (_b = this.root) === null || _b === void 0 ? void 0 : _b.right;
            }
            if (val > ((_c = this.root) === null || _c === void 0 ? void 0 : _c.val)) {
                curr = (_d = this.root) === null || _d === void 0 ? void 0 : _d.left;
            }
            if (val == this.root.val) {
                console.log(this.root.val);
                return;
            }
        }
    }
}
const myBST = new BSTree();
myBST.addNode(12);
myBST.addNode(13);
myBST.addNode(9);
myBST.addNode(15);
myBST.addNode(6);
myBST.addNode(3);
console.log(myBST.root);
