
// Split () Method

/*

The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.


*/

// Split the Words

let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray);


// Split the words, and return the second word

let text1 = "How are you doing today?";
const myArray1 = text.split(" ");
let word = myArray1[1];

console.log(word);

/*

// Split the characters, including spaces:

const myArray2 = text1.split("");
console.log(myArray2);


// Use the limit parameter

const myArray3 = text1.split("", 3) // (" ",3)
console.log(myArray3);



// Split a string into characters and return the second character:

const myArrays = text1.split("")
console.log(myArrays[1]);


*/

// Use a letter as a separator:

const myArr = text1.split("o");
console.log(myArr);


// If the separator parameter is omitted, an array with the original string is returned:

const myArrays = text.split();
console.log(myArrays);



/*

What is a shallow copy in JavaScript?

A shallow copy of an arrays or object is one where they both have the same reference in memory. 
That means that if you change the shallow copy, it may change the original copy too. I say may, 
since that is not always the case.

Let's look at an example using slice:

*/

let arrayOne = [ '⚡️', '🔎', '🔑', '🔩' ];
let arrayOneSlice = arrayOne.slice(2, 3);  

console.log(arrayOne); // [ '⚡️', '🔎', '🔑', '🔩' ]
console.log(arrayOneSlice); // [ '🔑' ]

/*

Here we have an array, which we then slice in the variable arrayOneSlice. Both of these arrays have the same reference in memory,
 since slice makes a shallow copy of them. So if we try to update arrayOneSlice, it will affect arrayOne too, right?

*/

let arrayTwo = [ '⚡️', '🔎', '🔑', '🔩' ];
let arrayTwoSlice = arrayOne.slice(2, 3);  

// Update arrayOneSlice
arrayTwoSlice[2] = '⚡️'

console.log(arrayTwo); // [ '⚡️', '🔎', '🔑', '🔩' ]
console.log(arrayTwoSlice); // [ '🔑', empty, '⚡️' ]