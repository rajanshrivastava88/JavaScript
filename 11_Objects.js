//Objects 



// Declare 2 types 

// 1. Literals (Not Singleton) 

/*

2. Constructor (Singleton)

Eg- Object.create

*/


// Object Literals


const mySymbol = Symbol["Key1"]

const JsUser = {
    name: "Rajan",
    "full name": "Rajan Srivatava",
    [mySymbol]: "myKey1",          // symbol
    age: 25,
    location: "New Delhi",
    email: "rajan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);


JsUser.email = "rajan@chatgpt.com" // used to change or Override the email

//Object.freeze(JsUser) // Used to freeze the objects after this no changes will be possible
//JsUser.email = "rajan@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Students");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.location}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




const rollno = Symbol("008115077")

const rajan = {
    name: "Rajan",
    branch : "IT",
    Clg_Name : "BVCOE",
    year : "4th",
    age: "24",
    Ph_N0: "9876543210",
    email_id: "rajan@gmail.com",
    [rollno] : "008115077"
}

console.log(rajan);
console.log(typeof rajan[rollno]);

rajan.email_id = "rajan@google.com"
console.log(rajan);

//Object.freeze(rajan)
//console.log(rajan);
rajan.Ph_N0 = "987656789"
//console.log(rajan);



// Functions


rajan.welcome = function (){
    console.log("Welcome to my Youtube Channel");
}
console.log(rajan.welcome());
console.log(`Hello welcome to ${rajan.name} youtube channel`);