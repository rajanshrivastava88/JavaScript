
// Filter 

/*

The filter() method creates a new array containing elements that satisfy a specified condition.

The filter() method skips empty elements and does not change the original array.

*/

const coding = ["Js", "ruby", "Java", "Python", "Cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values); // forEach does not return any Values



const myNums = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// or


const myNums1 = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNums1.filter( (num) =>{  
    return num > 4   // if we will open scope then we have to write return keyword  
})
console.log(newNums1);



const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);



const books = [ // There are many objects (And the user will apply filter)
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},

];

let userBooks = books.filter( (bk) => bk.genre === 'History')
//console.log(userBooks);

const userBooks1 = books.filter( (bk) => bk.genre === 'Science')
//console.log(userBooks1);


//userBooks = books.filter( (bk) => { return bk.publish >= 2000})
//console.log(userBooks);



userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);




const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);





const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const results = words.filter((word) => word.length > 6);

console.log(results);