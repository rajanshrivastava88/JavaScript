
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








function hoist(){
    console.log(a);
    
    var a = 10;
    var b = 20;
    var c = 30;

    //console.log(a,b,c);
    
}

hoist()