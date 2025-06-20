class SinglyLinkedListNode{
  value: number;
  next: null | SinglyLinkedListNode;
  constructor(value:number){
    this.value = value;
    this.next = null;
  } 
}

class SinglyLinkedList{
  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;
  private length: number;
  constructor(value:number){
    this.head = new SinglyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value:number){
    const newNode = new SinglyLinkedListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
  }
  prepend(value:number){
    const newNode = new SinglyLinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode
  }
  insert(value:number, index:number){
    if (index >= this.length){
      this.append(value)
      return "Index too large, but value has been appended."
    }
    if (index == 0){
      this.prepend(value)
    }
    const newNode = new SinglyLinkedListNode(value);
    let count = 0;
    let itr = this.head;
    while (count < index-1){
      itr = itr.next;
      count ++;
    }
    newNode.next = itr.next as SinglyLinkedListNode;
    itr.next = newNode;
  }
  traverseToIndex(index:number){
    let count = 0;
    let itr = this.head;
    while (count < index){
      itr = itr.next as SinglyLinkedListNode;
      count ++;
    }
    return itr
  }
   print(){
    let itr: SinglyLinkedListNode | null = this.head;
    let str: string = "";
    while (itr != this.tail){
      str += `${itr?.value} --> `;
      itr = itr.next;
    }
    str += `${this.tail.value}`
    console.log(str);
  }
}

const myList = new SinglyLinkedList(30);
myList.append(20);
myList.append(15);
myList.append(40);
myList.append(50);
myList.prepend(1);
myList.insert(23, 2);
myList.print();