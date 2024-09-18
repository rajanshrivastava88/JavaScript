// For loop

// for (let i = 7; i < 17; i++) 
// {
//     console.log("outer loop");
//     for (let j = 7; j < 17; j++) 
//     {
//         console.log("inner loop");
//     }
    
// }


// const size = 7 
// for (let r = 0; r < size; r++) 
// {
//     let r = 'aaaaaaa'
//     console.log(r);
// }



const size = 7 
for (let r = 1; r <=size; r++) 
{
    let r = ''; // empty
    for (let c = 1; c <=size; c++) 
    {
        if(r == 1 || c==5)
        {
            r += 'a';  // used to concatination of empty r
        }
        else {
            r+=" "
        }
    } 
    //console.log(r);
}



for(let i=1; i<=7; i++)
{
    let a="";
    for(let j=1; j<=7; j++)
    {
        if(i==1 || j==1 || i==4 || j==7)
        {
            a+="A"
        }
        else {
            a+=" "
        }
    }
    console.log(a);
}


// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
// }



let myArray = ["Rajan", "Anish", "Srivastava"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}



// Table of 1 to 5

for (let i = 1; i <= 5; i++) 
{
   for (let j = 1; j <= 10; j++) 
   {
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}