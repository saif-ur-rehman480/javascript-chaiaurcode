let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

let createdDate = new Date(2025,11,3)
// let createdDate = new Date(2025,11,3,6,30)
// let createdDate = new Date("3-12-2003")
// console.log(createdDate.toString())

let myTimeStamp = Date.now()
let createdTimeStamp = createdDate.getTime()
console.log(createdTimeStamp)
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000))



