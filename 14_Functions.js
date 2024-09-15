// Functions and Parameters

// Functions ==> Function is a non-primitive datatype in which we can wrap-up a set of codes for a reusability.

//console.log("R");
//console.log("a");
//console.log("j");
//console.log("a");
//console.log("n");

function sayMyName(){
    console.log("A");
    console.log("p");
    console.log("p");
    console.log("l");
    console.log("e");
}

//sayMyName()  // Calling the function

function myName(){
    console.log("R");
    console.log("a");
    console.log("j");
    console.log("a");
    console.log("n");   
}
//myName() // we can call the function by using this function name => myName()


// Addition of Two Numbers in Function


/*


function addTwoNumbers(number1, number2){
    console.log(number1 + number2);   
}

//addTwoNumbers()   // o/p => NaN
// addTwoNumbers(8, 9)
// addTwoNumbers(8, "9") // javascripts merge so it become 89
// addTwoNumbers(8, "a")
// addTwoNumbers(8, null)

const result = addTwoNumbers(9, 6)
console.log("Result: ", result); 

Ex :-

function addTwoNumbers(number1, number2){
    let result = number1 + number2; 
    console.log("Rajan")
    return result  
    // after return if we write any code it will not be worked
}


*/


function addTwoNumbers(number1, number2){
    // let result = number1 + number2; 
    // return result  
    // after return if we write any code it will not be worked
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // the return value can be stored into variable not only console.log
//console.log("Result: ", result);




/*

function loginUserMessage(username){
    if(username === undefined){ // it will run always in true situation
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rajan"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage()) // undefined

*/

function loginUserMessage(username){
    if(!username){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rajan"))
console.log(loginUserMessage()) 




function loginUserMessage(username = "sam"){ // sam is by default value
    if(!username){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rajan"))
console.log(loginUserMessage())
//console.log(loginUserMessage("Lalaji"))



/*


function additionOfTwoNo(num1, num2) {   // additionOfTwoNo (num1, num2)=> num1 & num2 is known as Parameters
    //console.log(num1 + num2);
    //let total= num1+num2
    return num1+num2  // return total
}
//additionOfTwoNo(8, 88) // additionOfTwoNo(8, 88) => it is known as Arguments
//console.log(additionOfTwoNo(8, 88)); //96 undefined 
//console.log(additionOfTwoNo(8, "88")); // null, "a"

const total = additionOfTwoNo(90, 90) // for removing undefined we have return value somting in function
//console.log("Total", total);


function loginUserMessage(username = "sam") {
    if(!username){                    //if(username === undefined/username)
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`

}
//console.log(loginUserMessage("Rajan"));
//console.log(loginUserMessage("Rajan Srivastava"));  // if we don't write inside the arguments then by default sam just logged in will be printed if we write 
                                                    // inside the arguments then the new value will be override


function additionOfTwoNumbers() {
    let a = 10
    let b = 20
    let c = (a+b)
    console.log(c);

}
additionOfTwoNumbers()

*/
