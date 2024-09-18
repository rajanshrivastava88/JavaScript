// Immediately Invoked Function Expression

/*
Syntax: IIFEs follow a particular syntax as shown below.

(function (){ 
// Function Logic Here. 
})();

*/

// This is used to remove global scope pollution during declaring the function
//And the function which can be immediately invoked is known as IIFE.

(function chai(){
    console.log("Hi, Please come to my home on a Chai");  
})();

(function aurcode(){
    console.log("DB CONNECTED TWO");
})();


(function tutorial() {   // Name IIFE
    name = "Tushar"
    video = "and we are on the video no 26"
    console.log(name, `We are studing Chai with code ${video}`);
})();


((name1) => {   // Simple IIFE
    console.log(`DB CONNECTED TWO ${name1}`);
})('rajan')


((name) => {
    //name = "sun lo duniya walo"
    console.log(`${name}, Soon we will start making projects`);
})("Tushar");



// Example 

function Greet() {
    console.log("Welcome to Mahadev ji's Saran");
};
// Execution of Regular Function. 
Greet();

// IIFE creation and execution. 
(function () {
    console.log("Please Say, Har Har Mahadev");
})();


// Declaring the parameter required. 
(function (dt) {
    console.log(dt.toLocaleTimeString());
    // Passing the Parameter. 
})(new Date());


(function() {
	// IIFE code block
	var localVar = 'This is a local variable';
	console.log(localVar); // Output: This is a local variable
})();


// Example 2: Here’s another example of an IIFE that stores and display result.
var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

console.log(result); // Output: 30


var counter = (function() {
	var count = 0;

	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)
