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


## Note

- Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

```javascript

function myFunction() {
  a = 4;
}

console.log(myFunction())

```


## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

## Lexical scoping

Consider the following example code:

```javascript

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


```

init() creates a local variable called name and a function called displayName(). 
The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. 

Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can access the variable name declared in the parent function, init().



## Scoping with let and const

Traditionally (before ES6), JavaScript variables only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes:

```javascript

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

```



## Closure

Consider the following code example:




```js

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

```