


const fruits = new Array("Apple", "Mangos", "Grapes", "Bananas")
const vegitables =  new Array("Potato", "Ladyfinger", "Culiflower", "Onion")


//fruits.push(vegitables) // through this technique the array and sub array will be occur
// console.log(fruits);  
// console.log(fruits[4]);

const mixture = fruits.concat(vegitables, vegitables) // in concatinate one array is fixed and others will be add after 1st
//console.log(mixture);

const mixtures = [...vegitables, ...fruits] // in spread no array is fixed we can exchanges
//console.log(mixtures);

const abcArray = [12, 21, 23, [123, 32], 8, [1, [2, 4, [23, 123, [34, 98, [78], 54], 45], 5, 3], 88], ,12, 34,99]
const defArray = abcArray.flat(3) // flat is used to Returns a new array and all sub-array elements concatenated into a recursively up to the specified depth

console.log(defArray);


console.log(Array.isArray(["Apple", "Banana"])); // its false because it is not an array its string
console.log(Array.from("Apple"));
console.log(Array.from({name: "Apple"}));


let marks1 = 150
let marks2 = 200
let marks3 = 250

console.log(Array.of(marks1, marks2, marks3)); // of is used to convert all the variable values into array


const hindi = 88
const english = 90
const maths = 75
const science = 95
const computer = 90
const socialscience = 70

console.log((Array.of(hindi, english, maths, science, computer, socialscience)));