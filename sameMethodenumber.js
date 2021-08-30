const arr = [3, 4, 5, 7, 8];

let txt = "";

console.log(arr.reduce((a, b) => a + b));
console.log(arr.reduce((a, b) => a + b * 3));
// pehle wale ko power nhi lera. is liye zero se initialize karenge as follows
console.log(arr.reduce((a, b) => a + b * 3, 0));
// in case of multiplication, 1 se initialize karenge
console.log(arr.reduce((a, b) => a * b * 3, 1));
