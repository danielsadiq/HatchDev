var CircularLinkedList = /** @class */ (function () {
    function CircularLinkedList() {
        this.head = null;
        this.count = 0;
    }
    CircularLinkedList.prototype.insertAtBeginning = function (item) {
        var node = new CircNode(item, this.head);
        this.head = node;
    };
    CircularLinkedList.prototype.insertAtEnd = function (item) {
        var itr = this.head;
        if (this.head === null) {
            this.insertAtBeginning(item);
        }
        while (itr) {
            if (itr.next === null) {
                itr.next = new CircNode(item, null);
                break;
            }
            itr = itr.next;
        }
    };
    CircularLinkedList.prototype.insertAtPosition = function (item, index) {
        var count = 0;
        var itr = this.head;
        while (itr !== null && count < index - 1) {
            // console.log(itr.data)
            itr = itr.next;
            count += 1;
        }
        if (itr === null) {
            console.log("Invalid Index");
            return;
        }
        var node = new CircNode(item, itr.next);
        itr.next = node;
        console.log(itr === null || itr === void 0 ? void 0 : itr.next.data);
    };
    CircularLinkedList.prototype.print = function () {
        var itr = this.head;
        var str = "";
        while (itr) {
            str += "".concat(itr.data, " --> ");
            itr = itr.next;
        }
        console.log(str);
    };
    return CircularLinkedList;
}());
var CircNode = /** @class */ (function () {
    function CircNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return CircNode;
}());
var cll = new CircularLinkedList();
cll.insertAtBeginning(123);
cll.insertAtBeginning(34);
cll.insertAtBeginning(98);
cll.insertAtEnd(97);
cll.print();
