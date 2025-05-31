var ArrayDaniel = /** @class */ (function () {
    function ArrayDaniel() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.data = {};
        this.length = 0;
        for (var i = 0; i < arguments.length; i++) {
            this.data[i] = arguments[i];
        }
    }
    ArrayDaniel.prototype.calcLength = function () {
        this.length = Object.keys(this.data).length;
        return this.length;
    };
    ArrayDaniel.prototype.index = function (val) {
        if (val >= this.calcLength()) {
            return undefined;
        }
        else {
            return this.data[val];
        }
    };
    ArrayDaniel.prototype.push = function (info) {
        this.calcLength();
        // console.log(this.calcLength());
        this.data[this.length] = info;
    };
    ArrayDaniel.prototype.pop = function () {
        this.calcLength();
        delete this.data[this.length - 1];
    };
    ArrayDaniel.prototype.shift = function () {
        for (var i = 1; i < this.calcLength() - 1; i++) {
            this.data[String(i - 1)] = this.data[String(i)];
        }
        return this.data;
    };
    ArrayDaniel.prototype.unshift = function (val) {
        var len = this.calcLength();
        for (var i = 0; i < len; i++) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = val;
    };
    ArrayDaniel.prototype.print = function () {
        var arr = [];
        for (var i = 0; i < this.calcLength(); i++) {
            arr.push(this.data[i]);
        }
        console.log(arr);
    };
    return ArrayDaniel;
}());
// const hello = new ArrayDaniel(1,2,3,4,5);
var hello = new ArrayDaniel();
var hellox = new ArrayDaniel();
hello.push(6);
hello.push(12);
hello.push(24);
hello.push(48);
hello.push(96);
hello.push(192);
// hello.pop();
hellox.push("Yes");
hellox.print();
// hello.shift();
// hello.unshift("Yes");
hello.print();
