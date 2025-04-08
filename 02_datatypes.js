/*

Data Types => JavaScript supports several primitive data types and also has built-in support for 
user defined data types like objects arrays and functions.

1. Primitive Data Types:

   - Number: Represents numeric values, both integers and floating-point numbers.

   - String: Represents a sequence of characters, enclosed within single (' ') or double (" ") quotes.

   - Boolean: Represents a logical value, either `true` or `false`.

   - Undefined: Represents a variable that has been declared but not assigned a value.

   - Null: Represents the intentional absence of any value.

   - Symbol: Introduced in ECMAScript 6 (ES6), represents a unique identifier.

2. Non-Primitive Data Types:

   - Object: Represents a collection of key-value pairs where keys are strings (or Symbols) and 
   values can be any data type, including other objects, functions, and arrays.

   - Array: It Represents a collection of elements indexed by non-negative integers.

   - Function: Functions are a subtype of objects but are treated separately due to their behavior. 
   They can be assigned to variables, passed as arguments, and returned from other functions.


*/


"use strict" // treat all JS code as newer version 

// alert(3+3) // we are using nodejs, not browser

//console.log(3+3, "Rajan") 


/*


let name="Rajan"
let age=24
let isLoggedIn = false


*/



// 7 types of datatypes (Primitive Data Types)

// 1. Number => 2 to power 53
// 2. bigint => Used in large type of numbers or websites where data is too large
// 3. string => "Rajan", 'rajan'
// 4. boolean => true or false
// 5. null => standalone value
// 6. undefined => variable defined but value not defined
// 7. symbol => unique


// object

//console.log([typeof "Rajan", typeof undefined, typeof null, typeof age, typeof isLoggedIn])
//onsole.table([typeof "Rajan", typeof undefined, typeof null, typeof age, typeof isLoggedIn])


let fruits = "Apple"
let vegitables = "Potato"
let numbers = 88

const isLoggedOut = true

console.log(fruits, vegitables, numbers, isLoggedOut);
console.log(typeof "Apple", typeof "Potato", typeof 88, typeof true);
//console.table([fruits, vegitables, numbers, isLoggedIn]);

//console.log(typeof fruits, typeof vegitables, typeof numbers, typeof isLoggedOut);





console.log(typeof "Rajan Srivastava");
console.log(typeof null);  // type => object
console.log(typeof undefined); // undefined


