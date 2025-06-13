var CircNode = /** @class */ (function () {
    function CircNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return CircNode;
}());
var CircularLinkedList = /** @class */ (function () {
    function CircularLinkedList() {
        this.head = null;
        this.count = 0;
    }
    CircularLinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    CircularLinkedList.prototype.insertAtBeginning = function (item) {
        var newNode = new CircNode(item, this.head);
        if (this.isEmpty()) {
            this.head = newNode;
            newNode.next = this.head;
        }
        else {
            var itr = this.head;
            while (itr.next !== this.head) {
                itr = itr.next;
            }
            itr.next = newNode;
            newNode.next = this.head;
        }
        this.count += 1;
    };
    CircularLinkedList.prototype.insertAtEnd = function (item) {
        var newNode = new CircNode(item, this.head);
        var itr = this.head;
        while (itr) {
            itr = itr.next;
            if (itr.next = this.head) {
                itr.next = newNode;
                break;
            }
        }
    };
    CircularLinkedList.prototype.insertAtPosition = function (item, index) {
        var count = 0;
        var itr = this.head;
        while (itr !== null && count < index - 1) {
            // console.log(itr.data)
            itr = itr.next;
        }
        if (itr === null) {
            console.log("Invalid Index");
            return;
        }
        var node = new CircNode(item, itr.next);
        itr.next = node;
    };
    CircularLinkedList.prototype.print = function () {
        var itr = this.head;
        var str = "";
        while (itr) {
            str += "".concat(itr.data, " --> ");
            itr = itr.next;
            if (itr === this.head) {
                break;
            }
        }
        console.log(str);
    };
    return CircularLinkedList;
}());
var cll = new CircularLinkedList();
cll.insertAtBeginning(123);
cll.insertAtBeginning(34);
cll.insertAtBeginning(98);
cll.insertAtBeginning(23);
cll.insertAtPosition(27, 2);
cll.insertAtBeginning(70);
cll.print();
