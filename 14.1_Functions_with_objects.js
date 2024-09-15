// Functions with Objects


function calculateCartPrice(var1, var2, var3, ...num1){  // function calculateCartPrice(...num1)  ==> rest operator
    return num1
}

//console.log(calculateCartPrice(100, 200, 300, 800, 200000));


const user = {
    username: "rajan",
    price: 500 // prices
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject ({
    username: "raj",
    price: 499
})

const myNewArray = [200, 400, 800, 1000]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 400, 800]));