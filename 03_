/*

Conversion Operation =>> you can perform various types of conversions to convert data from one type to another.

*/
let score = "abc33" // "abc123", if valuee is null = 0, true=1, undefined

console.log(typeof score); // function (it call after compilation)
console.log(typeof(score));  // method (it call at same time and run time )


let valueInNumber = Number(score)  // Number() function is used to covert score value(which is in the form of string) into the number
console.log(valueInNumber); //o/p= NaN -If the argument cannot be converted to a valid number, it returns NaN (Not-a-Number).
console.log(typeof valueInNumber)


// 33 number easily converted in number 33
// "33abc" => NaN (Not a Number) but it's datatype is a number
// true =>1; false =>0

// Converting String into The Boolean

let isLoggedIn = "Rajan"

let booleanISLoggedIn = Boolean(isLoggedIn) // isLoggedIn value is converted into the Boolean function
console.log(booleanISLoggedIn);

// 1= true; 0 = false
// " "(empty) = false
// "Rajan" => true


// Converting Number into the String

let someNumber = 33

let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);

// ********************** OPERATIONS ******************************************

let value = 3
let  negativevalue = -value
console.log(negativevalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  // exponentiation operator 
console.log(2/3);
console.log(2%3);

let str1= "Jai Maa"
let str2= " Sarswati Ji"
let str3= str1 + str2
console.log(str3);


console.log(1 + "2"); // No is Merged
console.log("1" +2); // No is Merged 
console.log("1" + 2 +2); // No is merged 122
console.log(1 + 2 + "2"); // 1+2+"2 => 1+2=3 "2" => 32 merged

console.log( (3+4) * 5 % 3);

console.log(true); // true ans

let num1, num2, num3 = 1 // NaN
let num4= num1+num2+num3
console.log(num4);

num1 = num2 = num3 = 2+2
console.log(num1)

let gameScore = 100
gameScore++; // 101 result
++gameScore; // 101 result after individual run

gameScore++;
++gameScore; // out put will be 102 because 1st reult of post incriment and the result of preincriment will be add 
//console.log(gameScore);




/*
1. String Conversion: - You can convert other data types to strings using the String() function 
or by concatenating with an empty string "".

*/

var num = 10;
var str = String(num); //String => Converts number to string
console.log(str);
console.log(typeof str);


/*

2. Number Conversion: => 

- You can convert strings to numbers using the parseInt() or parseFloat() functions.

- You can also use the Number() function for a more generic conversion.


*/

var str = "10";
var num = parseInt(str); //parseInt => Converts string to integer
console.log(num);
console.log(typeof num);


/*

3. Boolean Conversion: =>

- You can convert other data types to boolean using the Boolean() function.

- JavaScript defines a set of rules for converting other data types to boolean, where falsy values like 0, null, 
undefined, NaN, false, and empty strings ("") convert to false, and truthy values convert to true.

*/

var num = 10;
var bool = Boolean(num); // Converts number to boolean
console.log(bool);
console.log(typeof(bool));


/*

4. Implicit Conversion:

- JavaScript also performs implicit type coercion in certain situations, such as when using operators. 

For example, when you use the + operator with a string and a number, JavaScript will implicitly convert 
the number to a string and perform string concatenation.

*/

var num = 10;
var str = "Number is: " + num; // Implicit conversion to string
console.log(str);
console.log(typeof(str));


var num = 80;
var str = "Number is:" + num; //+num is Implicit conversion to string
console.log(str);


/*

5. Explicit Type Conversion:

- You can explicitly convert values using constructors or conversion functions like String(), Number(), Boolean(), 
parseInt(), and parseFloat().

- You can also use unary operators like + and - to explicitly convert strings to numbers.

*/

var str = "10";
var num ="Num is:" +str; // Explicit conversion to number using unary operator
console.log(num);
console.log(typeof(num));
