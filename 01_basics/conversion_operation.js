let score = null
// console.log(typeof score)
// console.log(typeof(score));
// let valueInBoolean = Boolean(score)
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(valueInBoolean)
// console.log(typeof valueInBoolean);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let valueInTrue = Boolean(isLoggedIn)
// console.log(valueInTrue);

// 1 => true; 0=> false
// "" => false
// "saif" => true

let number = 33
let valueInString = String(number)
// console.log(valueInString);
// console.log(typeof(valueInString));


let random = undefined
let randomValueInNumber = Number(random)
// console.log(randomValueInNumber);
// console.log(typeof randomValueInNumber);

let random2 = null
let randomValueInNumber2 = Number(random2)
// console.log(randomValueInNumber2);
// console.log(typeof randomValueInNumber2);

// ************************ Operations ***********************
let value = 45;
let negValue = -value;
// console.log(negValue);

// Arithmetic operators
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// String concatenation
let str1 = "hello"
let str2 = " saif"
let str3 = str1 + str2
// console.log(str3);

// Implicit type conversion

console.log("1" + 2); /* 12  */
console.log(1 + "2"); /* 12  */
console.log("1" + 2 + 2); /* 122 */
console.log(1 + 2 + "2"); /* 32 */

// these are question to practice
// console.log("2" + 1 + 1) 211
// console.log(1 + 1 + "2") 22
// console.log(true + "false") truefalse
// console.log("10" - true) 9
// console.log("5" - "2") 3
// console.log("5" + "2") 52
// console.log(3 + false + "7") 37
// console.log("6" / "2") 3
// console.log("hello" + true + 5) hellotrue5
// console.log("10" * 2) 20

// operator precedence
console.log((2+2)*3/6**2);

console.log(+true);
console.log(+"");

// postfix and prefix
let x = 10
let y = x++
console.log(x);
console.log(y)


let a = 30
let b = ++a
console.log(a);
console.log(b);



















