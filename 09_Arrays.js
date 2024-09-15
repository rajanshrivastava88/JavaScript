

// Array =>In javascript array is a collection of elements in which we can store any types of data

const myArray = [0, 1, 2, 6, 8, "Rajan", "Tushar", 9.5 ]
console.log(myArray[7]);

const myHeros = ["Shaktiman", "Baalveer", "Soanpari"]
console.log(myHeros[0])

const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8)
console.log(myArray2[5]);



// Array Methods

myArray.push(10)  // push() method is used to add elements in the array from the back side
myArray.push(15) 
console.log(myArray);

myArray.pop()  // pop() use as a method and we can't write anything inside the pop
console.log(myArray); // pop remove the number from the last




// Shift and Unshift Method


myArray.unshift(9)  // unshift add the no from starting of the array
console.log(myArray); 

myArray.shift()  // shift remove the number from starting of the array
//console.log(myArray);


// includes() method shows the that number or string is available or not in that array


const myNewArr = new Array(15,20,31,42,53,65,7,80,9,0)
console.log(myNewArr.includes(10));  // It shows the particular no is available or not in the array so the o/p =>false

console.log(myNewArr.indexOf(8)); // 8 kaun se index pe hai

const newArr = myNewArr.join('') // join is used to join all the elements together to form a single string
console.log(newArr); // if we use paranthesis then the bydefault the elements will be displayed with commas
console.log(typeof newArr); // if we use join('') then there will be no comma between the elements



// Slice and Splice


console.log("A","B", myNewArr);

const myn1 = myNewArr.slice(0, 5) //Slice the indexing of 0 to 5 the 5th indexing will not be printed and 0 to 4 will be printed

//console.log(myn1);
//console.log(myNewArr.splice(1, 5)); // 1 is starting index and 5 is no of elements to be selected or deleted from the original array


/*

 Slice (): - Extracts a portion of an array without modifying the original array.

Returns: A new array with the selected elements.

Does not modify: The original array.


Eg

const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]
console.log(arr);    // Original array remains unchanged: [1, 2, 3, 4, 5]



 splice() :- Adds, removes, or replaces elements in an array, modifying the original array.

Returns: An array of removed elements (if any).

Modifies: The original array.


Ex :- (Remove Elements)

const arr = [1, 2, 3, 4, 5];

const spliced = arr.splice(1, 3); // Removes 3 elements starting from index 1
console.log(spliced); // Output: [2, 3, 4]
console.log(arr);     // Original array modified: [1, 5]



Example :- (Add Elements)

const arr = [1, 2, 5];

arr.splice(2, 0, 3, 4); // Adds 3 and 4 at index 2
console.log(arr); // Output: [1, 2, 3, 4, 5]



 */



