/* There are 2 Type of Datatypes

1. Primitive
2. Non-Primitive




Ques : Is JavaScript a statically or a dynamically typed language?

Answer:: JavaScript is a dynamically typed language. but TypeScript is a statically typed language.


*/

//  Primitive Datatypes

//  7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // In javascript there is no concept of Decimal it will comes under Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // False // is (id === anotherId) (=== (equal to))

// const bigNumber = 3456543576654356754n  // biginit datatype 



// Reference Type (Non primitive datatype) => it is called by indexing in array and it is 3 types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array

let myObj = {    
    name: "Rajan",
    age: 24
}  // Objects

const myFunction = function(){
    console.log("Hello world");
}  // Functions

//console.log(typeof anotherId, typeof myObj, typeof heros, typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Memory 2 types 

// 1. Stack Type or Stack Memory (Primitive) stack me value ka copy milta hai

// 2. Heap Type or Heap Memory (Non-Primitive) heap me value ka reference milta hai



let myYoutubename = "rajanSrivastava8899"

let anothername = myYoutubename  // in this we are using copy of myYoutubename
anothername="Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",    
    upi: "user@ybl"
}

let userTwo = userOne  // in this we are using the reference value of userOne 

userTwo.upi = "rajan@google.com", // userTwo.email (.email) is used for accessing the email value
 

console.log(userOne.email);
console.log(userTwo.email);




let userOnes = {
    email: "user@google.com",    
    upi: "user@ybl"
}

let userTwo = userOnes  // in this we are using the reference value of userOne 

userTwo.upi = "Paytm", // userTwo.email (.email) is used for accessing the email value
 

console.log(userOnes.email);
console.log(userTwo.upi);




let userId = {
    userName : "rajansri8899",
    userPw : "lalaji123"
}


let SecondId = userId

SecondId.userId = "srivastavarajan@gmail.com"

console.log(userId.userName);
console.log(SecondId.userName);
