
// Filter Map and Reduce

const coding = ["Js", "ruby", "Java", "Python", "Cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values); // forEach does not return any Values



const myNums = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

// or


const myNums1 = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNums1.filter( (num) =>{
    return num > 4
})
console.log(newNums1);
