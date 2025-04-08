/*

Conversion Operation =>> you can perform various types of conversions to convert data from one type to another.

*/


let score = "abc33" // "abc123", if valuee is null = 0, true=1, undefined

console.log(typeof score); // function (it call after compilation)
console.log(typeof (score));  // method (it call at same time and run time )


let valueInNumber = Number(score)  // Number() function is used to covert score value(which is in the form of string) into the number
console.log(valueInNumber); //o/p= NaN -If the argument cannot be converted to a valid number, it returns NaN (Not-a-Number).
console.log(typeof valueInNumber)


// 33 number easily converted in number 33
// "33abc" => NaN (Not a Number) but it's datatype is a number
// true =>1; false =>0

// Converting String into The Boolean

let isLoggedIn = "Rajan"

let booleanISLoggedIn = Boolean(isLoggedIn) // isLoggedIn value is converted into the Boolean function
console.log(booleanISLoggedIn);

// 1= true; 0 = false
// " "(empty) = false
// "Rajan" => true


// Converting Number into the String

let someNumber = 33
let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);


