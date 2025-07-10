const isLoggedIn = true // assignment operator
if(isLoggedIn){
    // console.log("the code runs")
}
const temperature = 37
if(temperature > 37){
    // console.log("its hot today");
    
} else{
    // console.log("its not hot today because the temperatue is equal or low to human temperature");
    
}
// comparison operators
// <,>,<=,>=,!=,===,==,!==
if(3!=2){
    // console.log("execute")
}

const score = 100
if(score >= 100){
    const power = "fly"
    // console.log(`you can ${power}`)
}
// console.log(power) you cannot access variable outside scope

// short hand notation
// if(3 === 3) console.log("code executed"), console.log("oh");

// multiple condition checks
// If the age is 18 or above and income is 50,000 or more, print:
// "Eligible for premium membership"

// If the age is 18 or above but income is less than 50,000, print:
// "Eligible for basic membership"

// If the age is below 18, print:
// "Not eligible for membership"

// const age = 60
// const income = 10000
// if(age >= 18 && income >= 50000 ){
//     console.log("Eligible for premium membership")
// } else if (age >= 18 && income < 50000){
//     console.log("Eligible for basic membership")
// } else{
//     console.log("not eligible for membership")
// }


// const person_age = 45
// const monthly_income = 50000
// const credit_score = 699
// const hasExistingloans = false

// if(person_age >= 21 && monthly_income >= 40000 && credit_score >= 700 && hasExistingloans === false){
//     console.log("Eligible for loans")
// } else if(person_age >= 21 && monthly_income >= 30000 &&  credit_score >=650 && credit_score < 700 && hasExistingloans === false){
//     console.log("Eligible for small loan")
// } else {
//     console.log("not eligible for loan")
// }

// real life examples:
// const userLoggedIn = true
// const debitCard = true
// const loggedInFromEmail = false
// const loggedInFromGoogle = false
// if(userLoggedIn && debitCard ){
//     console.log("you can buy course");
    
// } else {
//     console.log("you can't buy course"); 
// }
// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("you can access that content ");
    
// } else {
//     console.log("you cannot access that content");
    
// }

// switch case:
// You are building a simple billing system for a restaurant.

// There are 3 types of meals:

// "basic": 500 PKR

// "standard": 1000 PKR

// "premium": 1500 PKR

// The customer can also apply a discount code (as a string):

// "NONE" → 0% discount

// "STUDENT" → 10% off

// "VIP" → 20% off

// Write a JavaScript program using a switch statement to:

// ✅ Determine the base price based on the meal type
// ✅ Then apply the discount using if...else
// ✅ Finally, display the final price after discount

// 🧪 Sample Input:
// js
// Copy
// Edit
// let mealType = "standard";
// let discountCode = "STUDENT";
// Expected Output:
// yaml
// Copy
// Edit
// Base Price: 1000
// Discount Applied: 10%
// Final Price: 900

// const mealType = "premium"
// const discountCode = "none"

// switch(mealType){
//     case "standard":
//         const basePrice = 1000
//         console.log(`Base price: ${basePrice}`);
//         if(discountCode === "student"){
//            console.log(`Discount: 10%`)
//            const discountValue = (`${basePrice*10/100}`)
//             const finalPrice = basePrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
            
//         } else if(discountCode == "vip"){
//             console.log(`Discount: 20%`)
//            const discountValue = (`${basePrice*20/100}`)
//             const finalPrice = basePrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
//         } else{
//             console.log(`Discount: None`)
//             console.log(`Final price: ${basePrice}`);
            
//         };
//         break;
//         case "basic":
//             const basPrice = 500
//         console.log(`Base price: ${basPrice}`);
//         if(discountCode === "student"){
//            console.log(`Discount: 10%`)
//            const discountValue = (`${basPrice*10/100}`)
//             const finalPrice = basPrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
            
//         } else if(discountCode == "vip"){
//             console.log(`Discount: 20%`)
//            const discountValue = (`${basPrice*20/100}`)
//             const finalPrice = basPrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
//         } else{
//             console.log(`Discount: None`)
//             console.log(`Final price: ${basPrice}`);
            
//         };
//         break;
//              case "premium":
//             const baPrice = 1500
//         console.log(`Base price: ${baPrice}`);
//         if(discountCode === "student"){
//            console.log(`Discount: 10%`)
//            const discountValue = (`${baPrice*10/100}`)
//             const finalPrice = baPrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
            
//         } else if(discountCode == "vip"){
//             console.log(`Discount: 20%`)
//            const discountValue = (`${baPrice*20/100}`)
//             const finalPrice = baPrice - discountValue
//             console.log(`Final price: ${finalPrice}`);
//         } else{
//             console.log(`Discount: None`)
//             console.log(`Final price: ${baPrice}`);
            
//         };
//         break;
//         default:
//             console.log("you enter wrong meal type")


        
// }

// truthy and falsy values:
const userEmail = [1,4,5]
if(userEmail){
    console.log("your email has received");
    
}
// truthy values
// "0","false"," ",[],{},function(){}
// falsy values
// false,0,-0,bigint0n,"",null,undefined

if(userEmail.length === 0){
    console.log("array is empty")
} else {
    console.log("array is not empty")
}
const myObj = {name: "username"}
if(Object.keys(myObj).length === 0){
    console.log("object is empty");
    
} else {
    console.log("object is not empty");
    
}   
// nullish coalescing operator (??):
let val;
// val = undefined ?? "hello"
val = null ?? 54 ?? 90
console.log(val);

// val = null ?? function () {
//     console.log("data is received");
    
// }
// val()

// Terniary operator:
3!=="3"? console.log("3 is not equal '3' ") : console.log("3 is equal to '3'")