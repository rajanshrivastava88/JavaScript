
// Map()

/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

The map() method of Array instances creates a new array populated with the results of calling a provided 
function on every element in the calling array.

*/

const array1 = [1, 4, 9, 16]
const map1 = array.map((x) => x * 2) // Pass a function to map
console.log(map1);




const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = MyNumbers.map( (num) => num + 10 ) // 10 will add in the all numbers in the Array 
console.log(newNums); // So it Becomes -> 11, 12, 13, 14, 15, 16, 17, 18, 19, 20



const MyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = MyNumbers.map( (num) => { 
    return num + 10
} )
console.log(newNums);




const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum1 = myNumber.forEach( (num) => { 
    return num + 10
} )
console.log(newNum1);


//Chaining in JS


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum2 = myNumbers.map( (num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40 )
console.log(newNum2);


const myNumbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum = myNumbr
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )
console.log(newnum);


