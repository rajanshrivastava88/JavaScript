// Strings


const name = "Rajan"
const repoCount = 50

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('rajan-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 5)
console.log(anotherString);

const newStringOne = "   hitesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

//console.log(url.includes('sundar'))

//console.log(gameName.split('-'));


//let text = "Hello world, welcome to the universe.";
//let result = text.indexOf("welcome");    // Index of Prototype

//console.log(result);


//let text = "HELLO WORLD";
//let letter = text.charAt(0);

//console.log(letter);


let text = "HELLO WORLD";
let letter = text.charAt(text.length-1);  // Charat prototype

//console.log(letter);


let txt = "Hello world!";
let ans = text.repeat(2);   // Repeat Prototype

//console.log(ans);


let value = "Hello world!";
let result = text.slice(0, 5);  //slice 

//console.log(result);
