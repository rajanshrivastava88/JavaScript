// Strings


const name = "Rajan"
const repoCount = 50

console.log(name + repoCount +  " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is known as string interpolation

console.log(`Hello my Name is ${name} and I am working as a Intern in ABP Networks`);


const gameName = new String('rajan-rj-com')

// String Accessing through Indexes


console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName[7]);

console.log(gameName[-1]); // In javascript we can't access strings through -ve indexes
console.log(gameName[-2]);


console.log(gameName.length); // Used the find the length of the string
console.log(gameName.toUpperCase()); // Converts all the string into Upper case
console.log(gameName.charAt(2)); // CharAt tells the at the 2 char in string which letter is placed
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('r')); // indexOf shows the 'r' is placed at which index number

const newString = gameName.substring(0, 4) // it will take characters from 0 to 4 means => raja
console.log(newString);

const anotherString = gameName.slice(-1, 4) // In slice we can give -ve index to find the characters
console.log(anotherString);

const newStringOne = "   rajan    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Trim is used to remove starting & ending spaces from the strings

const url = "https://rajan.com/rajan%20srivastava"

console.log(url.replace('%20', '-'))

console.log(url.includes('rajan')); // includes tells 'rajan' is available in the url or not

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


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
