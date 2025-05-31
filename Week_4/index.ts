class ArrayDaniel<T>{
  length:number;
  data: {};
  constructor(...args: T[]){
    this.data = {};
    this.length = 0;
    for (let i=0; i < arguments.length; i++){
      this.data[i] = arguments[i]
    }
  }
  calcLength(){
    this.length = Object.keys(this.data).length;
    return this.length
  }
  index(val:number){
    if (val >= this.calcLength()){
      return undefined
    }else{
      return this.data[val]
    }
  }
  push(info:T){
    this.calcLength();
    // console.log(this.calcLength());
    this.data[this.length] = info 
  }
  pop(){
    this.calcLength();
    delete this.data[this.length-1]
  }
  shift(){
    for (let i=1; i < this.calcLength()-1; i++){
      this.data[String(i-1)] = this.data[String(i)]
    }
    return this.data
  }
  unshift(val:T){
    const len = this.calcLength();
    for (let i=0; i < len; i++){
      this.data[i+1] = this.data[i];
    }
    this.data[0] = val;
  }

  print(){
    const arr = [];
    for (let i=0; i < this.calcLength(); i++){
      arr.push(this.data[i])
    }
    console.log(arr)
  }
}

// const hello = new ArrayDaniel(1,2,3,4,5);
const hello = new ArrayDaniel<number>();
const hellox = new ArrayDaniel<string>();

hello.push(6);
hello.push(12);
hello.push(24);
hello.push(48);
hello.push(96);
hello.push(192);
// hello.pop();

hellox.push("Yes")
hellox.print();

// hello.shift();
// hello.unshift("Yes");
hello.print();