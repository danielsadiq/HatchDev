class MyListNode<K,V> {
  key: K;
  value: V;
  next: MyListNode<K,V> | null;
  constructor(key:K, value:V){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class MyHashTable<K extends string, V> {
  MAX: number;
  arr: (MyListNode<K,V> | null)[]

  constructor() {
    this.MAX = 100;
    this.arr = new Array(this.MAX).fill(null)
  }

  private getHash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.MAX;
  }

  // set(key: string, value: any): void {
  set(key: K, value: V): void {
    const h = this.getHash(key);
    let found = false;
    const newItem = new MyListNode(key, value);
    if (this.arr[h] === null){
      this.arr[h] = newItem
    }else{
      newItem.next = this.arr[h];
      this.arr[h] = newItem
    }
  }
}


