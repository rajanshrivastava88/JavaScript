// Numbers and Maths

const score = 800
console.log(score);

const balance = new Number(120) // new defines the type
console.log(balance);


console.log(balance.toString());
console.log(typeof balance.toString());


console.log(balance.toString().length);  // length=>it finds the total length of numbers, toString is used to convert numbers into strings
console.log(balance.toFixed(2)); // toFixed means precise the number after decimal

const otherNumber = 123.8980
console.log(otherNumber.toPrecision(4)); // it counts 3 no as it is same and 4 no will be roundoff no so the o/p is 124

const hundred = 10000000000000
console.log(hundred.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // abs ==> absolute value

console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));  // ceil is used for bada no (big no) so 5 will be ans
console.log(Math.floor(4.9)); // floor is used for small no so 4 will be ans

console.log(Math.min(1,2,3,4,5,6,88, 0, 20, 10));  // used to find smallest value
console.log(Math.max(100, 99, 88, 10, 2, 1,79, 95));   // used to find largest value


console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);



const min =110
const max=150

console.log(Math.floor(Math.random()* (max-min + 1))+min)

//0 < x<1 => 0 < 41x < 41 => 11x = 40.23456890 => 41x+110<151