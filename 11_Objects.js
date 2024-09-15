//Objects 

// Declare 2 types 

// 1. Literals (Not Singleton available) 

// 2. Constructor (Singleton available)

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

rajan.welcome = function (){
    console.log("Welcome to my Youtube Channel");
}
console.log(rajan.welcome());
console.log(`Hello welcome to ${rajan.name} youtube channel`);