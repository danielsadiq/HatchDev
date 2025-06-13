class DoubNode{
  data:any;
  next:DoubNode | null;
  prev:DoubNode | null;
  constructor(data:any, next:DoubNode|null = null, prev:DoubNode | null = null){
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList{
  head: any;
  tail: any;
  count: number;
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  isEmpty(){
    return this.head === null;
  }
  insertAtBeginning(data:any){
    const newNode = new DoubNode(data);
    if (this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.count += 1
  }
  insertAtEnd(data:any){
    const newNode = new DoubNode(data);
    if (this.isEmpty()){
      this.insertAtBeginning(data);
    }else{
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.count += 1
  }
  print(){
    let itr: Nodex | null = this.head
    let str: string = ""
    while (itr){
      str += `${itr.data} --> `
      itr = itr.next;
    }
    console.log(str)
  }
}

const dll = new DoublyLinkedList();
dll.insertAtBeginning(34);
dll.insertAtBeginning(29);
dll.insertAtEnd(15);
dll.print();