# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def __init__(self):
        self.head = None
        self.tail = None
    def mergeTwoLists(self, lista, listb):
        arra = []
        print(lista)
        tempa = lista
        tempb = listb
        while(tempa):
            arra.append(tempa.val)
            tempa = tempa.next
        while (tempb):
            arra.append(tempb.val)
            tempb = tempb.next
        arra.sort()
        for el in arra:
            self.push(el)
        return self.head
      
    def push(self, value):
        newNode = ListNode(value)
        if self.head is None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        