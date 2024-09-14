// Numbers and Maths

const score = 800
console.log(score);

const balance = new Number(100) // new defines the type
console.log(balance);

console.log(balance.toString().length);  // length=>it finds the total length of numbers and 

// toString is used to convert numbers into strings

//console.log(balance.toFixed(1)); // toFixed means precise the number after decimal

const otherNumber = 123.98980
//console.log(otherNumber.toPrecision(4)); // it counts 3 no as it is same and 4 no will be roundoff no so the o/p is 124

const hundred = 10000000
//console.log(hundred.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // abs ==> absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // ceil is used for bada no (big no)
// console.log(Math.floor(4.9)); // floor is used for small no

// console.log(Math.min(1,2,3,4,5,6,88, 0, 20, 10));  // used to find smallest value
// console.log(Math.max(100, 99, 88, 10, 2, 1,79, 95));   // used to find largest value

// const min =110
// const max=150

// console.log(Math.floor(Math.random()* (max-min + 1))+min)

// 0 < x<1 => 0 < 41x < 41 => 11x = 40.23456890 => 41x+110<151