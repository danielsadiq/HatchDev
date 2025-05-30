"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangle_length, _Rectangle_width;
class Shape {
    constructor(name) {
        this._name = name; //Protected member
    }
    display() {
        console.log(`Shape: ${this._name}`);
    }
}
class Rectangle extends Shape {
    constructor(name, length, width) {
        super(name);
        _Rectangle_length.set(this, void 0);
        _Rectangle_width.set(this, void 0);
        __classPrivateFieldSet(this, _Rectangle_length, length, "f"); //Private
        __classPrivateFieldSet(this, _Rectangle_width, width, "f");
    }
    area() {
        return __classPrivateFieldGet(this, _Rectangle_length, "f") * __classPrivateFieldGet(this, _Rectangle_width, "f");
    }
    display() {
        super.display();
        console.log(`Area: ${this.area()}`);
    }
}
_Rectangle_length = new WeakMap(), _Rectangle_width = new WeakMap();
// I. Create an instance of Rectangle
const rect = new Rectangle("My Rectangle", 5, 10);
// II. Call the display() method
rect.display();
