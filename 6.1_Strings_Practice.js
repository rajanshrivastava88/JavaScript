const name = "rajansrivastava"
const age = 25
const city = "New Delhi"

console.log(`Hello my name is ${name} and my age is ${age} and I live in ${city}`);

const surName = String("Srivastava")
const surNames = new String("Srivastava")

console.log(name.length);
console.log(surName);
console.log(surNames);

console.log(surName.toUpperCase());
console.log(surName.toLowerCase());
console.log(surName.charAt(1));
console.log(surName.indexOf('a'));
console.log(surName.split('-'));



const newString = surName.substring(0, 9)
console.log(newString);


const newStr = surName.slice(1, 5)
console.log(newStr); // from 1 index to 4 index in slice(-1 from last no)



const str = "  Lalaji  "
console.log(str);
console.log(str.trim());


const url = "https://rajan.com/rajan%20srivastava"

console.log(url.replace('%20', '-'));
console.log(url.includes("rajan"));
console.log(url.includes("raja"));
console.log(url.includes("najar"));


let text = "HELLO WORLD";
let letter1 = text.charAt(text.length - 1);
let letter2 = text.charAt(text.length - 2);
let letter3 = text.charAt(text.length - 3);
console.log(letter1, letter2, letter3);



let txt = "Hello world!";
let ans = text.repeat(2);   // Repeat Prototype
console.log(ans);



let text2 = "Hello world, welcome to the universe.";
let result = text2.indexOf("welcome");    // Index of Prototype
console.log(result);


let text1 = "HELLO WORLD";
let letter = text1.charAt(0);
console.log(letter);