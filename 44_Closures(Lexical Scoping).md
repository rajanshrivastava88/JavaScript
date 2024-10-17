## JavaScript Closures

- JavaScript variables can belong to the local or global scope.

- Global variables can be made local (private) with closures.


## Global Variables

- A function can access all variables defined inside the function, like this:

```javascript 

function myFunction() {
    let a = 4;
    return a * a;
  }

console.log(myFunction());

```

- But a function can also access variables defined outside the function, like this:

```javascript 

let b = 5;
function myFunction() {
  return b * b;
}

console.log(myFunction())

```
In the last example, b is a global variable.

In a web page, global variables belong to the page.

Global variables can be used (and changed) by all other scripts in the page.

In the first example, b is a local variable.

A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

Global and local variables with the same name are different variables. Modifying one, does not modify the other.



- Note

- Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

```javascript

function myFunction() {
  a = 4;
}

console.log(myFunction())

```