// Array =>In javascript array is a collection of elements in which we can store any types of data

const myArray = [0, 1, 2, 6, 8, "Rajan", "Tushar", 9.5 ]
console.log(myArray[7]);

const Arr = ["Shaktiman", "Baalveer", "Soanpari"]
//console.log(Arr[0])

const myArray1 = new Array(1, 2, 3, 4, 5, 6, 7, 8)
console.log(myArray1[5]);

// Array Methods

myArray.push(10)
//console.log(myArray);

myArray.pop()  // pop() use as a method and we can't write anything inside the pop
//console.log(myArray); // pop remove the number from the last


myArray.unshift(9)  // unshift add the no from starting of the array
console.log(myArray); 

myArray.shift()  // shift remove the number from starting of the array
//console.log(myArray);


const myNewArr = new Array(15,20,31,42,53,65,7,80,9,0)
//console.log(myNewArr.includes(10));  // It shows the particular no is available or not in the array so the o/p =>false

//console.log(myNewArr.indexOf(8)); // 8 kaun se index pe hai

const newArr = myNewArr.join('') // join is used to join all the elements together to form a single string
// console.log(newArr); // if we use paranthesis then the bydefault the elements will be displayed with commas
// console.log(typeof newArr); // if we use join('') then there will be no comma between the elements



// Slice and Splice

//console.log("A","B", myNewArr);

const myn1 = myNewArr.slice(0, 5) //Slice the indexing of 0 to 5 the 5th indexing will not be printed and 0 to 4 will be printed

console.log(myn1);
console.log(myNewArr.splice(1, 5)); // 1 is starting index and 5 is no of elements to be selected or deleted from the original array


