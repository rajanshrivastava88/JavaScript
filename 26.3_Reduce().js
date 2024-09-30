
// Reduce () Method 

/*

The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.


*/

// Mostly used in Shopping cart

// Eg:-

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

//console.log(sumWithInitial);
// Expected output: 10




const myNum = [1, 2, 3]

const myTotals = myNum.reduce( function (acc, currentvalue) {
    return acc + currentvalue
}, 0)

//console.log(myTotals);



// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currentvalue) {
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
//     return acc + currentvalue
// }, 3)

// console.log(myTotal);




const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currentvalue) => acc + currentvalue, 0)

//console.log(myTotal);



let objects = [{x: 1}, {x: 2}, {x: 3}];

let sum = objects.reduce(
    (acc, currentValue) => acc + currentValue.x, 0,
);

console.log(sum);







const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile development course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) =>acc + item.price, 0)
//console.log(priceToPay);
