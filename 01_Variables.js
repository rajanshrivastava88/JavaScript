/*

Variables => In JavaScript, a variable is a symbolic name for a value. Variables are used to store data 
that can be referenced and manipulated throughout the execution of a program. JavaScript variables can 
hold various types of data, including numbers, strings, arrays, objects, functions, and more.

*/

const accountId = 123456
let accountEmail="rajan@gmail.com"
var accountPassword="98765"
accountAddress = "Delhi"
let accountState;

// Mostly we'll use const and let

// accountId=2

accountEmail="rajansri88@gmail.com"
accountPassword= 123456
accountAddress="Utter Pradesh"
console.table([accountId, accountEmail, accountPassword, accountAddress, accountState])



let myVariable = 10;
const PI = 3.14;
Variable = "Hello, world!";


console.log(myVariable, PI, Variable);



let var1 = "Rajan"
let var2 = "Kumar"
let var3 = "Srivastava"

console.table([var1, var2, var3]); // table is used to print the values in the tabular form 



/*

 let and const are used most of the time because they provide better control over variable scope and immutability 
 compared to var, which is traditionally used in older versions of JavaScript.

 let: It declares a block-scoped variable that can be reassigned. This means that the variable declared with 
 let is only accessible within the block it's defined in, such as a loop or a function


 const: It also declares a block-scoped variable but with the added constraint that its value cannot be reassigned. 
 This ensures that once a value is assigned to a const variable, it cannot be changed later in the code. 


 var : Variable Scope: Variables declared with var are function-scoped or globally scoped, rather than block-scoped
like let and const. This can lead to unexpected behavior and bugs, especially in larger codebases where 
variable names might clash due to hoisting.

*/