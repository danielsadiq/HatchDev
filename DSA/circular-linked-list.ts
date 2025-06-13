class CircularLinkedList{
  head: any;
  count: number;
  constructor(){
    this.head = null;
    this.count = 0;
  }
  insertAtBeginning(item:any){
    const node = new CircNode(item, this.head)
    this.head = node
  }
  insertAtEnd(item:any){
    let itr = this.head
    if (this.head === null){
      this.insertAtBeginning(item)
    }
    while (itr){
      if (itr.next === null){
        itr.next = new CircNode(item, null);
        break
      }
      itr = itr.next;
    }
  }
  insertAtPosition(item:any, index:number){
    let count = 0;
    let itr = this.head
    while (itr!== null && count < index-1){
      // console.log(itr.data)
      itr = itr.next;
      count +=1
    }
    if (itr === null){
      console.log("Invalid Index")
      return
    }
    const node = new CircNode(item, itr.next)
    itr.next = node
    console.log(itr?.next.data)
  }
  print(){
    let itr: CircNode | null = this.head
    let str: string = ""
    while (itr){
      str += `${itr.data} --> `
      itr = itr.next;
    }
    console.log(str)
  }
}

class CircNode{
  data:any;
  next:CircNode | null;
  constructor(data:any, next:CircNode|null){
    this.data = data
    this.next = next
  }
}

const cll = new CircularLinkedList();
cll.insertAtBeginning(123)
cll.insertAtBeginning(34)
cll.insertAtBeginning(98)
cll.insertAtEnd(97)
cll.print()