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

let name="Rajan"
let age=24
let isLoggedIn = false


// number => e to power 53

// 7 types of datatypes

// 1. bigint
// 2. string => " Tushar"
// 3. boolean => true or false
// 4. null => stand-alone value
// 5. undefined =>
// 6. symbol => unique
// 7. Number

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



let a = "Rajan Srivastava";
console.log(a)