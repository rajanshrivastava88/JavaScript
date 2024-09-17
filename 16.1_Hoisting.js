
/*

 Hoisting : JavaScript scope and hoisting are fundamental concepts that every developer should understand 
            to write efficient and error-free code. These concepts determine how variables and functions are 
            accessed and executed within a JavaScript program.


*/

function hoist(){
    console.log(a);
    
    var a = 10;
    var b = 20;
    var c = 30;

    //console.log(a,b,c);
    
}

hoist()