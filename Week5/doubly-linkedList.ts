class DoublyNode{
  data: number;
  next: DoublyNode | null;
  prev: DoublyNode | null;
  constructor(data:number, next:DoublyNode|null = null, prev:DoublyNode|null = null){
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList{
  head: DoublyNode | null;
  tail: DoublyNode | null;
  length: number;

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertFirst(value:number){
    const newNode =  new DoublyNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length++
  }
  push(value:number){
    const newNode = new DoublyNode(value);
    if (this.isEmpty()){
      this.insertFirst(value);
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode; 
      this.length ++;
    }
  }
  insert(value:number, index:number){
    if (index > this.length){
      console.log("Index too big, value added to the end");
      this.push(value);
    }
    if (this.length === 0){
      this.insertFirst(value);
    }
    const newNode = new DoublyNode(value);
    const prevNode = this.traverseToIndex(index-1);
    const nextNode = this.traverseToIndex(index);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    this.length ++;
  }
  traverseToIndex(index:number){
    let count = 0;
    let itr = this.head
    while (count < index){
      itr = itr?.next as DoublyNode
      count ++
    }
    return itr
  }
  isEmpty(){
    return this.length === 0;
  }
  print(){
    let myStr = "";
    let itr = this.head;
    while (itr){
      myStr += `${itr.data} --> `;
      itr = itr.next
    }
    console.log(myStr)
  }
}

const myList = new DoublyLinkedList()
myList.push(4);
myList.push(23);
myList.push(32);
myList.push(37);
myList.push(91);
myList.insert(53, 2);
myList.print();