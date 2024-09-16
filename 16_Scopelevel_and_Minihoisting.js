// Scope Lavel and Mini Hoisting


function three(){
    const usersname = "Rajan Srivastva"

    function four(){
        const website = "E-Commerce"
        console.log(usersname);
        
    }
    //console.log(website);
    
    four()
}

//three()


if (true) {
    const username = "Rajan"
    if (username === "Rajan") {
        const website = "flipkart"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}


addThree(5)
const addThree = function(num){
    return num + 2
}





/*

function one(){
    const username = "rajan"

    function two(){
        const website = "youtube"
        console.log(username, website);
    }
    //console.log(website);

    two()

}
// one()


// Hoisting
function codeHoist() {
    a = 10;
    let b = 50;
  }
  codeHoist();
   
  console.log(a); // 10
  //console.log(b); // ReferenceError : b is not defined



var x = 10;
function test()
{
	var x = 20;
}
test();
console.log(x);
// Here the variable ‘x’ declared (and of course initialized) outside the function 
//‘test’ has a global scope and that’s why it is accessible anywhere in this scope globally. 
//However, the one declared and initialized inside the ‘test’ function can be accessed only inside that function


if (true) {
    const username = "rajan"
    if (username === "rajan") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);




// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5) ======================>>> Hoisting
const addTwo = function(num){
    return num + 2
}


// ******************** && *********************


console.log(add(15))

function add(num){
    return num + 1
}



// addOfTwo(5) //======================>>> Hoisting
const addOfTwo = function(num){
    return num + 2
}

*/