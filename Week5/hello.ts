function myRecurse(num:number):number{
  if (num < 1){
    return 0
  }
  if (num == 1) return 1
  else {
    return num + myRecurse(num-1)
  }
}

const hey = myRecurse(4);
console.log(hey)