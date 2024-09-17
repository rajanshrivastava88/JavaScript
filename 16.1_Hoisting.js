
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

Global Scope: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code. Global scope is the outermost scope.
Local Scope: Variables declared within a function or block are in the local scope. They can only be accessed within that specific function or block.


*/

function hoist(){
    console.log(a);
    
    var a = 10;
    var b = 20;
    var c = 30;

    //console.log(a,b,c);
    
}

hoist()