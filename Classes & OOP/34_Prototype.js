
// Prototype

let myName = "rajan    "
let myChannel = "chai     "

// console.log(myName.trim().length);

// console.log(myName.length);

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() { // method -> function inject
        console.log(`Spidy power is ${this.spiderman}`);  
    }
}

Object.prototype.rajan = function() {
    console.log(`rajan is present in all objects`);
    
}

Array.prototype.heyRajan = function(){
    console.log(`Rajan says hello`);
    
}

//heroPower.rajan()

myHeros.rajan()
myHeros.heyRajan()

//heroPower.heyRajan()