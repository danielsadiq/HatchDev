class HashTable {
  max: number;
  arr: any[];
  constructor() {
    this.max = 100;
    this.arr = Array.from({ length: 100 }, () => []);
  }
  getHash(key: string) {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.max;
  }
  setItem(key: string, value: any) {
    const h = this.getHash(key);
    console.log(h);
    let found = false;
    if (this.arr[h] > 0) {
      for (let i = 0; i < this.arr[h].length; i++) {
        if (this.arr[h][i][0] == key){
          this.arr[h][i][1] = value;
          found = true
          break
        }
      }
    }
    if (found == false){
      this.arr[h].push(new Set([key, value]));
    }
  }
  
}

const t = new HashTable();

t.setItem("6-Mar", 27);
t.setItem("Mar-6", 27);
t.setItem("»", 27);
console.log(t.arr[87])