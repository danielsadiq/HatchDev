"use strict";
class DoublyNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    insertFirst(value) {
        const newNode = new DoublyNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.count++;
    }
    isEmpty() {
        return this.count === 0;
    }
    push(value) {
        const newNode = new DoublyNode(value);
        if (this.isEmpty()) {
            this.insertFirst(value);
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.count++;
        }
    }
}
const myList = new DoublyLinkedList();
myList.push(7);
myList.push(77);
myList.push(91);
console.log(myList);
