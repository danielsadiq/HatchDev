class QueueNode<T = number|string>{
  value: T;
  next: QueueNode<T> | null;
  constructor(value:T){
    this.value = value;
    this.next = null;
  }
}

class Queue<T>{
  top: QueueNode<T> | null;
  bottom: QueueNode<T> | null;
  private length: number;
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  isEmpty(){
    return this.length === 0;
  }
  enque(value:T){
    const newNode = new QueueNode(value);
    if (this.isEmpty()){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      this.bottom.next = newNode;
      this.bottom = newNode;
    }
    this.length++;
  }
  deque(){
    const holdingNode = this.top;
    if (this.length ===1){
      this.top = null;
      this.bottom = null;
    }
    this.top = this.top?.next || null;
    this.length --;
    return holdingNode
  }
}
const queue = new Queue<number>();
queue.enque(5);
queue.enque(6);
queue.enque(10);
console.log(queue)
queue.deque();
console.log(queue)