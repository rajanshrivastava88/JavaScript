// Comparision Operator

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 ===6 );

console.log(null == 0); // null trated as different datatype bcz for "equality" null is not converted as 0(number)
console.log(null > 0);  // null treated as 0 bcz for comparison null is converted as 0 (number)  
console.log(null < 0);  // null treated as 0 bcz for comparison null is converted as 0 (number)

console.log(null >= 0);  // null treated as 0 bcz for comparison null is converted as 0 (number)
console.log(null <= 0);  // null treated as 0 bcz for comparison null is converted as 0 (number)

console.log("2" > 1);  // string is converted in number in javascript and make it 2 is greater than 1
console.log("02" > 0);  // 

console.log(undefined == 0);  // null treated as 0 bcz for comparison null is converted as 0 (number)
console.log(undefined > 0); 
console.log(undefined < 0);  


// The reason is that an equality check == and comparisions >< >= <= work differently
// Comparisions convert null number, trating it as 0.
// That's why (3)null >= 0 is true and (1)null>0 is false

//console.log("02" >= "03"); 


// === (Strict checks whether the value and datatype of another value is true or false)
// === checks both values(dataype) is same or not

//console.log("3" === "03");
//console.log("3" === "3");
//console.log("2" === 2);

//console.log("2" == "2");
//console.log("02" >= "001"); // in string character is comparing in "02">="1" is false bcz (0 character is less than 1)
//console.log("02" == "2");  // JavaScript compares them lexicographically, character by character
//console.log("02" >= 1);        

// Lexicographically refers to the order that strings are arranged in based on the alphabetical order 
// of their characters. When comparing strings lexicographically, you're essentially comparing them 
// character by character, starting from the leftmost character.

// for example ==> Similarly, in your example "02" and "001", the first character "0" is the same, 
// so the comparison moves to the next character. Since "2" comes after "0", "02" is considered greater than "001" 
// when compared lexicographically.