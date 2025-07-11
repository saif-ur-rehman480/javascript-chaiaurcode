// for loop
for(let i = 0; i<=10; i++){
    // console.log(`Result: ${i}`);
    
}
for(let i = 1; i<=10; i=i+2){
    let element = `result: ${i}`
    if(i == 7){
        // console.log("7 is best number");
        
    }
    // console.log(element);
    
}

// nested loop:
for(let i = 1; i<=10; i++){
    // console.log(`TABLE OF: ${i}`);
    for(let j = 1; j<=10; j++){
        // console.log(` ${j*i}`);
        
    }
}

let myArray = ["flash","superman","batman"]
for(let i = 0; i<myArray.length; i++){
    const element = myArray[i]
    // console.log(element)
}

// break and continue
for(let i = 1; i<= 20; i++){
    const element = i;
    if(i == 5){
        // console.log("5 detected");
        break
        
    }
    // console.log(element)
}

for(let i = 1; i<=20; i++){
    const element = i;
    if(element == 5){
        // console.log("5 detected")
       continue // skip the current iteration and continues loop
    }
    // console.log(element); 
    
}
// while and do-while loop
// let index = 0;
// while(index <= 10){
    // console.log(index);
//     index = index + 2
     
// }

// let fruits = ["apple","bannana","cherry"]
// let index = 0;
// while(index<fruits.length){
//     console.log(`index ${index}: ${fruits[index]}`);
//     index = index + 1
    
// }

// let index = 1;
// do{
//     console.log(index);
//     index++
    
// } while(index <= 10)

// for of
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for(const item of arr){
//     console.log(item);
    
// }

// const greetings = "hello world"
// for(const greet of greetings){
//     if(greet == " "){
//         console.log("now its time to break")
//         break
//     }
//     console.log(greet);
    
// }

// const map = new Map()
// map.set("0","zero")
// map.set("1","one")
// map.set("2","two")
// console.log(map);
// map.forEach((key,value)=>{
//     console.log(key,value);
    
// })

// for(const [key,value] of map){
//     console.log(key,value);
    
// }

// for of loop is not used for objects 
// const myObj = {
//     name: "saif",
//     class: "web development"
// }
// for(const item of myObj){
//     console.log(item);
    
// }

// for in

// const myObj = {
//     name: "saif",
//     class: "web development",
//     age: 21,
//     hobby: "playing football"
// }

// for(const key in myObj){
//     console.log(key, myObj[key]);
    
// }

let vegetables = ["carrot","ladyfinger","spinach"]
// for(const key in vegetables){
//     console.log(key ,vegetables[key]);
    
// }
// vegetables.forEach((value,item)=>{
//     console.log(value,item);
    
// })
// const myObj = {
//     name: "saif",
//     class: "web development",
//     age: 21,
//     hobby: "playing football"
// }
// myObj.forEach((item) => {
//     console.log(item);
    
// });
function printMyName(item){
    console.log(item);
    

}
vegetables.forEach(printMyName)
vegetables.forEach((item,index,vegetables)=>{
    console.log(item,index,vegetables);
    
})

// [{},{},{}]
const users = [
  { name: "Ali", age: 21 },
  { name: "Sara", age: 25 },
  { name: "Ahmed", age: 30 }
];
users.forEach((item)=>{
    console.log(item.name);
    
})
