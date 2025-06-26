// class DoublyNode<T = number|string>{
//   data: T;
//   next: DoublyNode | null;
//   prev: DoublyNode | null;
//   constructor(data:T, next:DoublyNode|null = null, prev:DoublyNode|null = null){
//     this.data = data
//     this.next = next
//     this.prev = prev
//   }
// }

// class DoublyLinkedList<T = number|string>{
//   head: DoublyNode<T> | null;
//   tail: DoublyNode<T> | null;
//   count: number;

//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.count = 0;
//   }
//   insertFirst(value:T){
//     const newNode =  new DoublyNode(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.count++
//   }
//   isEmpty(){
//     return this.count === 0;
//   }
//   push(value:T){
//     const newNode = new DoublyNode(value);
//     if (this.isEmpty()){
//       this.insertFirst(value);
//     }else{
//       this.tail.next = newNode
//       newNode.prev = this.tail 
//     }
//   }
// }