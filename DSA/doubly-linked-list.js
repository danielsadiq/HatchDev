"use strict";
class DoubNode {
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
    isEmpty() {
        return this.head === null;
    }
    insertAtBeginning(data) {
        const newNode = new DoubNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.count += 1;
    }
    insertAtEnd(data) {
        const newNode = new DoubNode(data);
        if (this.isEmpty()) {
            this.insertAtBeginning(data);
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count += 1;
    }
    print() {
        let itr = this.head;
        let str = "";
        while (itr) {
            str += `${itr.data} --> `;
            itr = itr.next;
        }
        console.log(str);
    }
}
const dll = new DoublyLinkedList();
dll.insertAtBeginning(34);
dll.insertAtBeginning(29);
dll.insertAtEnd(15);
dll.insertAtEnd(25);
dll.print();
