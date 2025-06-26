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
  count: number;

  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  insertFirst(value:number){
    const newNode =  new DoublyNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.count++
  }
  isEmpty(){
    return this.count === 0;
  }
  push(value:number){
    const newNode = new DoublyNode(value);
    if (this.isEmpty()){
      this.insertFirst(value);
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode 
      this.count ++
    }
  }
}

const myList = new DoublyLinkedList()
myList.push(7);
myList.push(77);
myList.push(91);
console.log(myList);
