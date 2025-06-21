"use strict";
class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }
    enque(value) {
        const newNode = new QueueNode(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
        this.length++;
    }
    deque() {
        var _a;
        const holdingNode = this.top;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        }
        this.top = ((_a = this.top) === null || _a === void 0 ? void 0 : _a.next) || null;
        this.length--;
        return holdingNode;
    }
}
const queue = new Queue();
queue.enque(5);
queue.enque(6);
queue.enque(10);
console.log(queue);
queue.deque();
console.log(queue);
