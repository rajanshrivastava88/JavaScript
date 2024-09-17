
/*

 Hoisting : JavaScript scope and hoisting are fundamental concepts that every developer should understand 
            to write efficient and error-free code. These concepts determine how variables and functions are 
            accessed and executed within a JavaScript program.


Introduction to Scope in JavaScript.

Scope in JavaScript is a concept that defines the accessibility of variables, functions, and objects in 
some particular part of your code during runtime. Scope can be thought of as a set of rules that determine 
where a variable or function is accessible.


What is Scope?

Scope determines the visibility and lifetime of variables and functions. 
JavaScript primarily has two types of scope: global and local.

1. Global Scope: Variables declared outside of any function or block are in the global scope. 
They can be accessed from anywhere in the code. Global scope is the outermost scope.

2. Local Scope: Variables declared within a function or block are in the local scope. 
They can only be accessed within that specific function or block.


*/

/*

Global Scope

Variables that are declared outside of any function or block are considered to be in the global scope. 
They are accessible throughout the entire script, which means you can access and modify them from any 
part of your code. This can be useful for variables that need to be accessed frequently from different 
places in your program, but it can also lead to potential issues if not managed carefully, such as naming 
collisions and unintended modifications.

*/


// Global variable

var globalVariable = "I am a global variable";

function checkGlobalScope(){
    console.log(globalvariable); // I am a global variable
    
}

checkGlobalScope()
console.log(globalVariable); // Output: I am a global variable



/*

Local Scope

Local scope refers to variables that are declared within a specific function or block and are only 
accessible within that function or block. There are different types of local scope: function scope 
and block scope.

Function Scope: Variables declared within a function are function-scoped. 
This means that they are only accessible within that function and cannot be accessed from outside it.

*/

function checkFunctionScope() {
    var localVariable = "I am a local variable";
    console.log(localVariable); // Output: I am a local variable
}

checkFunctionScope();
console.log(localVariable); // Error: localVariable is not defined


/*

Block Scope: Block scope is a more recent addition to JavaScript, introduced with ES6 (ECMAScript 2015). 
             Variables declared with let and const are block-scoped, meaning they are only accessible within 
             the nearest enclosing block (e.g., {}, if, for, while statements).

*/


if (true) {
    let blockScopedVariable = "I am block scoped";
    const anotherBlockScopedVariable = "I am also block scoped";
    console.log(blockScopedVariable); // Output: I am block scoped
    console.log(anotherBlockScopedVariable); // Output: I am also block scoped
}

console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
console.log(anotherBlockScopedVariable); // Error: anotherBlockScopedVariable is not defined

/*

Lexical Scope :

Lexical scope, also known as static scope, refers to the fact that the accessibility of variables is 
determined by the physical structure of the code. In other words, a variable’s scope is defined by its 
location within the source code, and nested functions have access to variables declared in their outer scope.

*/

function outerFunction() {
    var outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // Output: I am from outer function
    }

    innerFunction();
}

outerFunction();



/*
What is Hoisting?
Hoisting in JavaScript allows variables and function declarations to be used before they are declared. 
However, it is essential to understand how hoisting works differently for variable declarations and 
initializations, and function declarations and expressions.

Hoisting of Variables
In JavaScript, variable declarations using var are hoisted to the top of their scope. However, only the 
declaration is hoisted, not the initialization. This can lead to unexpected behavior if not properly 
understood.


*/
console.log(hoistedVariable); // Output: undefined
var hoistedVariable = "I am hoisted";
console.log(hoistedVariable); // Output: I am hoisted


/*

Hoisting with let and const

Variables declared with let and const, introduced in ES6, are also hoisted but in a different way. 
While the declarations are hoisted, they are not initialized until the code execution reaches their 
line of declaration. Accessing these variables before their initialization results in a ReferenceError.

*/


console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";



/*
Hoisting of Functions

Function declarations are also hoisted to the top of their scope. 
This allows you to call a function before you define it in the code.

*/

hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
    console.log("I am a hoisted function");
}

/*

Example 1: Global and Local Scope

Understanding the difference between global and local scope is crucial for avoiding variable naming 
conflicts and unintended behavior in your code.


*/

var globalVar = "Global";

function testScope() {
    var localVar = "Local";
    console.log(globalVar); // Output: Global
    console.log(localVar); // Output: Local
}

testScope();
console.log(globalVar); // Output: Global
console.log(localVar); // Error: localVar is not defined


/*

Example 2: Function Scope and Hoisting

This example demonstrates how variable and function declarations are hoisted within their respective scopes.

*/

console.log(hoistedVar); // Output: undefined
var hoistedVar = "Hoisted Variable";

function hoistedFunction() {
    console.log("Hoisted Function");
}

hoistedFunction(); // Output: Hoisted Function

/*

Example 3: Block Scope and let/const

This example illustrates the block-scoping behavior of variables declared with let and const.

*/

function checkBlockScope() {
    if (true) {
        let blockVar = "Block Scoped";
        const blockConst = "Block Constant";
        console.log(blockVar); // Output: Block Scoped
        console.log(blockConst); // Output: Block Constant
    }

    console.log(blockVar); // Error: blockVar is not defined
    console.log(blockConst); // Error: blockConst is not defined
}

checkBlockScope();






function hoist(){
    console.log(a);
    
    var a = 10;
    var b = 20;
    var c = 30;

    //console.log(a,b,c);
    
}

hoist()