const name = "saif"
const repCount = 50
const age = 21
// console.log(name + repCount + " Value");
// string interpolation
let intro = (`my name is ${name} and my age is ${age}`)
// console.log(intro);

const gameName = new String("gta-vicecity")
console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log( typeof gameName.toUpperCase());
console.log(gameName.charAt("4"))
console.log(gameName.indexOf("-"));
console.log(gameName.substring(0,3))
console.log(gameName.slice(-3,-1));

const disease = "   cancer   "
console.log(disease.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"))
console.log(url.includes(":"))
console.log(url.split(":"))





