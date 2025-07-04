class Solution {
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    mergeTwoLists(lista: ListNode | null, listb: ListNode | null): ListNode | null {
        let arra: number[] = [];
        
        let tempa: ListNode | null = lista;
        let tempb: ListNode | null = listb;

        while (tempa) {
            arra.push(tempa.val);
            tempa = tempa.next;
        }

        while (tempb) {
            arra.push(tempb.val);
            tempb = tempb.next;
        }

        arra.sort((a, b) => a - b); // Sort numerically

        for (let el of arra) {
            this.push(el);
        }

        return this.head;
    }

    push(value: number): void {
        let newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) { // Type guard to ensure tail is not null
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }
}