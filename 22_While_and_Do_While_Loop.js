// While and Do while loop

/*
While loop

1. A while loop evaluates the condition inside the parenthesis ().
2. If the condition evaluates to true, the code inside the while loop is executed.
3. The condition is evaluated again.
4. This process continues until the condition is false.
5. When the condition evaluates to false, the loop stops.

*/


let indexes = 0
while (indexes <= 20)
{
    console.log(`Value of Indexes is ${indexes}`);
    indexes = indexes + 2
    
}


// program to display numbers from 1 to 5
// initialize the variable


let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}



let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }





let myArray = ['Ram', 'Krishna', 'Shambhu']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}






/*
The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, 
before checking if the condition is true, then it will repeat the loop as long as the condition is true.

*/

let text = ""
let j = 0;

do {
  text += "The number is " + j;
  j++;
}
while (j < 10); 

console.log(j);





// let score = 5
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);



// let scores = 1
// do {
//     console.log(`Score is ${scores}`);
//     scores++
// } while (scores <= 10);



let score1 = 11
do {
    console.log(`Score is ${score1}`);
    score1++
} while (score1 <= 10);

