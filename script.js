// JavaScript: Primitive vs Reference
let x = 20;
let y = x;
console.log(x, y);
x = 30;
console.log(x, y);


let a = { value: 50 }
let b = a;
console.log(a,b);
a.value = 100;
console.log(a,b);
