"use strict";
function fiboRecurse(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fiboRecurse(num - 1) + fiboRecurse(num - 2);
    }
}
console.log(fiboRecurse(6));
