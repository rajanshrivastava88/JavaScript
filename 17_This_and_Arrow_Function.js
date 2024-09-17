// This and Arrow Function


/*

Arrow Function => Arrow functions allow us to write shorter function 

syntax: let myFunction = (a, b) => a * b;

*/

// Arrow function

let myFunction = (a, b) => a * b;
console.log(myFunction(4, 5)); 


// Before arrow

let hello = "";

hello = function() {
  return "Hello World";
}
//console.log(hello());



// With Arrow Function:

rajan = () => {
  return "Hello World";
}
//console.log(rajan());


// Arrow Functions Return Value by Default:

let hi = "";
hi = () => "Hello World, world this is arrow function";
//console.log(hi());   //This works only if the function has only one statement.


let hy = "";

hy = (st) => "Hello " + st;   
//console.log(hy("Tushar, Kaise ho Tushar"));  // Arrow Function With Parameters:



// Arrow Function Without Parentheses:

without_parentheses = val => "Hello " + val;
console.log(without_parentheses("Please say, Har Har Mahadev"));


/*

This Keyword 

With arrow functions, this keyword always represents the object that defined the arrow function.


*/



const detail = {
    username : "rajan",
    roll_no: 811507721,

    welcomeMessage : function() {
        // console.log(`${this.username} welcome to shark tank season3`);
        // console.log(this);
    }
}

//detail.welcomeMessage()

//detail.username = "Tushar"
//detail.welcomeMessage()
//detail.welcomeMessage()
//console.log(this);    

function chai() {
    //console.log(this);
}

//chai()   // this functions returns the all properties of the function using this keyword


const coffee = function() {
    let name = "Rajan"
    let lastname = "Kumar"

    console.log(this.name);
}

//coffee()  

//undefined =>>> because this keyword in the function doesn't have any property which we are trying to access.

                        



const chaiwala = () => {
    let username = "rajan"
    console.log(this);
}

//chaiwala()


//const addTwoNo = (num1, num2) => {   // in curly braces we can use return values
//     return num1 + num2
// }

//console.log(addTwoNo(8,8));


const numbers = (num1, num2) => num1 + num2
console.log(numbers(6,7));


const addTwoNo = (num1, num2) => (num1 + num2)  // but without parentheses we cann't return values
console.log(addTwoNo(8, 5));

const broshree = (num1, num2) => ({username : "Tushar", marks: num1 + num2})
console.log(broshree(80, 85)); 


const tea = (naam, age) => (console.log(naam, age)) // implicit return

const chai1 = (num1, num2) => {return console.log(num1 + num2);} // Explicit returm

const chaiwala1 = (num1, num2) => ({username: 'Rajan', age : num1 + num2})

tea(2,3)
chai1('Mast Aadmi', 80)
console.log(chaiwala1(88, 89));

