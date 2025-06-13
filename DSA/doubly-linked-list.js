var DoubNode = /** @class */ (function () {
    function DoubNode(data, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    return DoubNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    DoublyLinkedList.prototype.insertAtBeginning = function (data) {
        var newNode = new DoubNode(data);
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
    };
    DoublyLinkedList.prototype.insertAtEnd = function (data) {
        var newNode = new DoubNode(data);
        if (this.isEmpty()) {
            this.insertAtBeginning(data);
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count += 1;
    };
    DoublyLinkedList.prototype.print = function () {
        var itr = this.head;
        var str = "";
        while (itr) {
            str += "".concat(itr.data, " --> ");
            itr = itr.next;
        }
        console.log(str);
    };
    return DoublyLinkedList;
}());
var dll = new DoublyLinkedList();
dll.insertAtBeginning(34);
dll.insertAtBeginning(29);
dll.insertAtEnd(15);
dll.print();
