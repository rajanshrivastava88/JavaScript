/*
Break and Continue

=> The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.


*/

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log(`Detected 5`);
        break
    }
   //console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
  // console.log(`Value of i is ${index}`);
    
}



let text = "";
for (let i = 0; i < 10; i++)
{
    if (i === 3) 
    { 
        break; 
    }
    text += "The number is " + i ;
}
console.log(text); 



/*
The Continue Statement
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 3:

*/

let txt = "";
for (let i = 0; i <=10; i++) {
  if (i === 3) 
  { 
    continue;
}
  txt += "The number is " + i;
}
console.log(txt);