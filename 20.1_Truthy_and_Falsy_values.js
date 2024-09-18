
// truthy values => In this we suppose that the value will be true

const userEmailId = "rajan@gmail.com"

if(userEmailId) {
    console.log("Email is true");
}
else
{
    console.log("Email is wrong");
}




const userEmail = []  // array, the value will be true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}





// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



const userObject = {}

if (Object.keys(userObject).length === 0) {
    console.log("User object is complete");
}




// Nullish Coalescing Operator (??): null undefined


let val1, val2, val3, val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 5 ?? 50


// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);



// Terniary Operator
// condition ? true : false

const chai = 100
chai <= 80 ? console.log("Price is less than 20") : console.log("Price is more than 20")


let val5, val6, val7, val8;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 5 ?? 50


console.log(val5, val6, val7, val8);


/*

// all true
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;

// all false
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;




The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN


Everything else is truthy. That includes:


'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

*/


const truthy_values = [
    false,
    0,
    ``,
    '',
    "",
    null,
    undefined,
    NaN,
    '0',
    'false',
    [],
    {},
    function() {}
  ].filter(Boolean);
  
  // Filter out falsy values and log remaining truthy values
  console.log(truthy_values);
