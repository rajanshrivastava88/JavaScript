// Functions with Objects


function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000));



function calculateCartPrice1(val1, val2, val3, ...num1){  // function calculateCartPrice(...num1)  ==> rest operator/Spread Operator
    return num1
}

//console.log(calculateCartPrice1(100, 200, 300, 800, 200000));



// Object passes into Function

const user = {
    username: "rajan",
    price: 500 // prices
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user) calling the function
handleObject ({
    username: "raj",
    price: 499
})


// Passing the arrays

const myNewArray = [200, 400, 800, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 400, 800]));