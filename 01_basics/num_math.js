const score = 500
console.log(score);

const balance = new Number(300)
console.log(balance.toString().charAt(2));
console.log(balance.toFixed(2))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(6)) /* always returns a string */

const hundreds = 10000000
console.log(hundreds.toLocaleString());
// +++++++++++++++++++++++ Math ++++++++++++++++++++++++++
// Math is a library which is by default in javascript
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.5));
console.log(Math.ceil(10.1))
console.log(Math.floor(4.6));
console.log(Math.min(3,6,90));
console.log(typeof Math.max(3,6,90));


// console.log(Math.floor((Math.random()*10)+1));
// console.log(Math.floor(Math.random()*6)+1)

const max = 45
const min = 19
console.log(Math.floor(Math.random() * (max - min + 1)) + min);






