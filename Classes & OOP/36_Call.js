/* call Method

The call() method of Function instances calls this function with a given this value and arguments provided individually.


*/
function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // .call is used to hold the refernce variable (current execution context ko kisi aur function ko pass kar deta hai)

    this.email = email
    this.password = password
}

const evening = new createUser("chai", "chai@fb.com", "123")
console.log(evening);




function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"




/*

Using call() to invoke a function and specifying the this value

In the example below, when we call greet, the value of this will be bound to object obj, even when greet is not a method of obj.


*/


function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
  }
  
  const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
  };
  
  greet.call(obj); // cats typically sleep between 12 and 16 hours

  


/*

Using call() to invoke a function without specifying the first argument

If the first thisArg parameter is omitted, it defaults to undefined. In non-strict mode, the this value is then substituted 
with globalThis (which is akin to the global object).


*/

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"



// In strict mode, the value of this is not substituted, so it stays as undefined.


"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
