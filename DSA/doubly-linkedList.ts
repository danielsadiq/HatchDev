class DoublyNode<T = number|string>{
  data: T;
  next: DoublyNode | null;
  prev: DoublyNode | null;
  constructor(data:T, next:DoublyNode|null = null, prev:DoublyNode|null = null){
    this.data = data
    this.next = next
    this.prev = prev
  }
}
