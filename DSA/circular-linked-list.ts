class CircNode{
  data:any;
  next:CircNode | null;
  constructor(data:any, next:CircNode|null = null){
    this.data = data
    this.next = next
  }
}

class CircularLinkedList{
  head: any;
  count: number;
  constructor(){
    this.head = null;
    this.count = 0;
  }
  isEmpty(){
    return this.head === null;
  }
  insertAtBeginning(item:any){
    const newNode = new CircNode(item, this.head)
    if (this.isEmpty()){
      this.head = newNode
      newNode.next = this.head
    }
    else{
      let itr = this.head;
      while (itr.next !== this.head){
        itr = itr.next
      }
      itr.next = newNode
      newNode.next = this.head
    }
    this.count += 1
  }
  insertAtEnd(item:any){
    const newNode = new CircNode(item, this.head)
    let itr = this.head
    while (itr){
      itr = itr.next
      if (itr.next = this.head){
        itr.next = newNode
        break
      }
    }
  }
  insertAtPosition(item:any, index:number){
    let count = 0;
    let itr = this.head
    while (itr!== null && count < index-1){
      // console.log(itr.data)
      itr = itr.next;
    }
    if (itr === null){
      console.log("Invalid Index")
      return
    }
    const node = new CircNode(item, itr.next)
    itr.next = node
  }
  print(){
    let itr: CircNode | null = this.head
    let str: string = ""
    while (itr){
      str += `${itr.data} --> `
      itr = itr.next;
      if (itr === this.head){
        break
      }
    }
    console.log(str)
  }
}

const cll = new CircularLinkedList();
cll.insertAtBeginning(123)
cll.insertAtBeginning(34)
cll.insertAtBeginning(98)
cll.insertAtBeginning(23)
cll.insertAtPosition(27,2)
cll.insertAtBeginning(70)
cll.print()