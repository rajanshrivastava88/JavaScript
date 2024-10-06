
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

// Split the characters, including spaces:

const myArray2 = text1.split("");
console.log(myArray2);


// Use the limit parameter

const myArray3 = text1.split("", 3) // (" ",3)
console.log(myArray3);

