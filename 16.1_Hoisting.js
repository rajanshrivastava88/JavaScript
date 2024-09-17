

//  Hoisting

function hoist(){
    console.log(a);
    
    var a = 10;
    var b = 20;
    var c = 30;

    //console.log(a,b,c);
    
}

hoist()