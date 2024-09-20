
// Filter Map and Reduce

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



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Fiction', publish: 1981, edition: 2004},

]