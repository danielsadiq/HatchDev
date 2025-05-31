var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insertAtBeginning = function (item) {
        var node = new Nodex(item, this.head);
        this.head = node;
    };
    LinkedList.prototype.insertAtEnd = function (item) {
        var itr = this.head;
        if (this.head === null) {
            this.insertAtBeginning(item);
        }
        while (itr) {
            itr = itr.next;
            if (itr.next === null) {
                itr.next = new Nodex(item, null);
                break;
            }
        }
    };
    LinkedList.prototype.insertAtPosition = function (item, index) {
        var count = 0;
        var itr = this.head;
        while (count < index - 1) {
            // console.log(itr.data)
            itr = itr.next;
            count += 1;
        }
        var node = new Nodex(item, itr.next);
        itr.next = node;
        console.log(itr === null || itr === void 0 ? void 0 : itr.next.data);
    };
    LinkedList.prototype.print = function () {
        var itr = this.head;
        var str = "";
        while (itr) {
            str += "".concat(itr.data, " --> ");
            itr = itr.next;
        }
        console.log(str);
    };
    return LinkedList;
}());
var Nodex = /** @class */ (function () {
    function Nodex(data, next) {
        this.data = data;
        this.next = next;
    }
    return Nodex;
}());
var ll = new LinkedList();
ll.insertAtBeginning(7);
ll.insertAtBeginning(12);
ll.insertAtEnd(24);
ll.insertAtEnd(13);
ll.insertAtPosition(50, 2);
ll.print();
