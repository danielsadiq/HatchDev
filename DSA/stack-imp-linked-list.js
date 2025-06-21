"use strict";
class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new StackNode(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
    }
    pop() {
        var _a;
        let holdingNode = this.top;
        this.top = ((_a = this.top) === null || _a === void 0 ? void 0 : _a.next) || null;
        if (this.length == 1) {
            holdingNode = this.bottom;
            this.top = null;
            this.bottom = null;
        }
        this.length--;
        return holdingNode;
    }
    peek() {
        var _a;
        if (this.isEmpty())
            console.log("This stack is empty");
        return (_a = this.top) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.length === 0;
    }
}
const myStack = new Stack();
myStack.push(4);
myStack.push(5);
console.log(myStack);
