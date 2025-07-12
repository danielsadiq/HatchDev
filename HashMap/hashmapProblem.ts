class MyHashTableWithoutCollison<K extends string, V> {
  MAX: number;
  arr: (MyListNode<K,V> | null)[]

  constructor() {
    this.MAX = 100;
    this.arr = new Array(this.MAX).fill(null)
  }
  private getHash(key: K): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.MAX;
  }
  set(key: K, value: V): void {
    const h = this.getHash(key);
    const newItem = new MyListNode(key, value);
    this.arr[h] = newItem;
  }
  get(){}
}