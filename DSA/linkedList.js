"use strict";
class Nodex {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtBeginning(item) {
        const node = new Nodex(item, this.head);
        this.head = node;
    }
    insertAtEnd(item) {
        let itr = this.head;
        if (this.head === null) {
            this.insertAtBeginning(item);
        }
        while (itr) {
            if (itr.next === null) {
                itr.next = new Nodex(item, null);
                break;
            }
            itr = itr.next;
        }
    }
    insertAtPosition(item, index) {
        let count = 0;
        let itr = this.head;
        while (itr !== null && count < index - 1) {
            // console.log(itr.data)
            itr = itr.next;
            count += 1;
        }
        if (itr === null) {
            console.log("Invalid Index");
            return;
        }
        const node = new Nodex(item, itr.next);
        itr.next = node;
        console.log(itr === null || itr === void 0 ? void 0 : itr.next.data);
    }
    deleteAtPosistion(item, index) {
        let count = 0;
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
const ll = new LinkedList();
ll.insertAtBeginning(7);
ll.insertAtBeginning(12);
ll.insertAtEnd(24);
ll.insertAtEnd(13);
ll.insertAtPosition(50, 2);
ll.print();
