//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let headNode = null as ListNode|null;
  while (head) {
    const newNode = new ListNode(head.val);
    if (!headNode) {
      headNode = newNode;
    } else {
      newNode.next = headNode;
      headNode = newNode;
    }
    head = head.next;
  }
  return headNode;
}
