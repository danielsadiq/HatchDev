"use strict";
class HashTable {
    constructor() {
        this.max = 100;
        this.arr = Array.from({ length: 100 }, () => []);
    }
    getHash(key) {
        let h = 0;
        for (let i = 0; i < key.length; i++) {
            h += key.charCodeAt(i);
        }
        return h % this.max;
    }
    setItem(key, value) {
        const h = this.getHash(key);
        let found = false;
        if (this.arr[h] > 0) {
            for (let i = 0; i < this.arr[h].length; i++) {
                if (this.arr[h][i][0] == key) {
                    this.arr[h][i][1] = value;
                    found = true;
                    break;
                }
            }
        }
        if (found == false) {
            // this.arr[h].push(new Set([key, value]));
            this.arr[h].push([key, value]);
        }
    }
    getItem(key) {
        const h = this.getHash(key);
        for (let i = 0; i < this.arr[h].length; i++) {
            if (this.arr[h][i].length === 2 && this.arr[h][i][0] === key) {
                return this.arr[h][i][1];
            }
        }
    }
    deleteItem(key) {
        const h = this.getHash(key);
    }
}
const t = new HashTable();
t.setItem("6-Mar", 27);
t.setItem("Mar-6", 58);
t.setItem("»", 27);
console.log(t.getItem("Mar-6"));
