class ListNode<K,V> {
  key: K;
  value: V;
  next: ListNode<K,V> | null;
  constructor(key:K, value:V){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashTable {
  MAX: number;
  arr: [string, any][][];

  constructor() {
    this.MAX = 100;
    this.arr = new Array(this.MAX).fill(null).map(() => []);
  }

  private getHash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.MAX;
  }

  set(key: string, value: any): void {
    const h = this.getHash(key);
    let found = false;
    for (let i = 0; i < this.arr[h].length; i++) {
      const el = this.arr[h][i];
      if (el.length === 2 && el[0] === key) {
        this.arr[h][i] = [key, value];
        found = true;
        break;
      }
    }
    if (!found) {
      this.arr[h].push([key, value]);
    }
  }

  get(key: string): any | undefined {
    const h = this.getHash(key);
    for (let i = 0; i < this.arr[h].length; i++) {
      const el = this.arr[h][i];
      // Original Python code had 'break' here, which would only check the first element.
      // Removed 'break' to allow checking all elements in the bucket.
      if (el.length === 2 && el[0] === key) {
        return el[1]; // Return the value, not the [key, value] tuple
      }
    }
    return undefined; // Return undefined if key not found
  }

  delete(key: string): void {
    const h = this.getHash(key);
    // The original Python code cleared the entire bucket.
    // To delete only the specific key, we need to filter the array.
    this.arr[h] = this.arr[h].filter(el => el[0] !== key);
  }
}


