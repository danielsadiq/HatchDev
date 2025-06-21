class StackNode<T>{
  value: T;
  next: StackNode<T> | null;
  constructor(value:T){
    this.value = value;
    this.next = null;
  }
}

class Stack<T>{
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  private length:number
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value:T){
    const newNode = new StackNode(value);
    if (this.isEmpty()){
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    }else{
      newNode.next = this.top;
      this.top = newNode;
      this.length ++;
    }
  }
  pop() {
    let holdingNode = this.top;
    this.top = this.top?.next || null;
    if (this.length == 1) {
      holdingNode = this.bottom;
      this.top = null;
      this.bottom = null;
    }
    this.length--;
    return holdingNode;
  }
  peek() {
    if (this.isEmpty()) console.log("This stack is empty");
    return this.top?.value;
  }
  isEmpty(){
    return this.length === 0;
  }
}

const myStack = new Stack<number>();
myStack.push(4)
myStack.push(5)

console.log(myStack)