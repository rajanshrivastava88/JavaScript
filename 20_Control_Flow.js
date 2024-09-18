// if statement



/*
if(true){

}


if(false){
    
}

*/

if(2 === "2"){
    console.log("executed");
}



//const isUserloggedIn = true
const temperature = 35

if ( temperature === 50 ){   // temperature < 50
    //console.log("less than 50");
}
else 
{
   //console.log("temperature is greater than 50");
}

//console.log("Execute");



// <, >, <=, >=, ==, !=, ===, !==

const score = 500

if (score > 100) {
    //var power = "fly"
    //console.log("Print True value");  //console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`);  // scope problem


const balance = 1000

/*
if (balance > 500) console.log("test Successful"); // Implicite scope (Don't try this, because it's not good for coding)
*/


if (balance < 500) 
//console.log("test")
//else
//console.log("test2");




if (balance < 500) 
{
    // console.log("less than 500");
} 
else if (balance < 750) 
{
    // console.log("less than 750");
    
} 
else if (balance < 900) 
{
    // console.log("less than 750");
    
} 
else 
{
    // console.log("less than 1200");
}


// Check Multiple Conditions

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && loggedInFromGoogle && loggedInFromEmail) { // all conditions should be true then if condition will be run otherwise else condition will run if any condition will be false
    //console.log("Allow to buy course");
}
else 
{
    //console.log("Don't allow to buy the course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    //console.log("User logged in");
}



const Month = 12

if(Month == 12)
{
    console.log("January");
}
