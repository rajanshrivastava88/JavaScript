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


Running this code has exactly the same effect as the previous example of the init() function above. What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.

At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.


- Here's a slightly more interesting example—a makeAdder function:

```js

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

```

In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.


## Practical closures

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).



For more Updates Read through the Below links

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
