class ListNode<k,v>{
  key: k;
  value:v;
  next: ListNode<k,v> | null
  constructor(key:k, value:v, next: ListNode<k,v> | null = null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap<K extends string,V>{
  private buckets: (ListNode<K,V> | null)[]
  private size: number;
  constructor(){
    this.size = 100;
    this.buckets = new Array(this.size).fill(null)
  }

  private getHash(key: K): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.size;
  }

  set(key:K, value:V): void{
    let h = this.getHash(key);
    let head = this.buckets[h]

    let curr = head
    
    while(curr){
      if(curr.key == key){
        curr.value = value
        return
      }
      curr = curr.next
    }
    let newItem = new ListNode(key, value, head);
    this.buckets[h] = newItem
    // if (this.buckets[h] === null){
    //   this.buckets[h] = newItem;
    // }else{
    //   // prepend to the begininning.
    //   newItem.next = this.buckets[h];
    //   this.buckets[h] = newItem;
    // }
  }
  get(key:K){
    const h = this.getHash(key);
    let curr = this.buckets[h];

    while(curr){
      if (curr.key === key){
        return curr.value
      }
      curr = curr.next
    }
    return
  }
  remove(key: K): void{
    const h = this.getHash(key);
    let curr = this.buckets[h];
    let prev: ListNode<K,V> | null = null;
    while (curr){
      if (curr.key === key){
        if (prev){
          prev.next = curr.next
          return
        } else{
          this.buckets[h] = curr.next
        }
      }
      prev = curr
      curr = curr.next
    }
    return
  }
}