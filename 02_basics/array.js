const myArr = [0,1,2,3,4,5]
const myHeroes = ["cristiano-ronaldo","elon-musk","david-goggins"]
// console.log(myHeroes);
// console.log(myHeroes[1]);
// console.log(myArr);
// array methods
// console.log(myHeroes.push("jordan-peterson"));
// console.log(myHeroes.pop())
// console.log(myHeroes.unshift("hitesh-choudhary"));
// console.log(myHeroes.shift())
// console.log(myHeroes.includes("lionel-messi"))
// console.log(myHeroes.indexOf("david-goggins"))
const newArr = myArr.join()
// console.log( typeof newArr);

// console.log(myHeroes);

// slice and splice
const fruits = ["apple","bannana","orange","peach","strawberry"]

// console.log(fruits.slice(1,3));
// console.log(fruits);

// console.log(fruits.splice(1,3))
// console.log(fruits);

const marvel_heroes = ["ironman","spiderman","captain-america"]
const dc_heroes = ["superman","batman","flash"]
// console.log(marvel_heroes.push(dc_heroes)) /* it returns lenth of array */
console.log(marvel_heroes.concat(dc_heroes)) /* it does change original array */
console.log([...marvel_heroes,...dc_heroes])
console.log(marvel_heroes)




