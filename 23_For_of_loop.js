
// for of Loop

// Structure of For of loop

// for (const element of object) {   // means kaun se object pe hum loop laga skte hai
    
// }


// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for(const num of arr) { // num and arr can be anything as a variable means we can put any words in the place of num 
    console.log(num);

}


const greetings="Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps

// map js mdn search it on google for documentation reading

// Map contains unique value it cant be repeated


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);


for(const key of map) {
    console.log(key);
}

for(const [key, value] of map) {  // Array destructure key and value will be printed seperated
    console.log(key, ':-', value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {   // TypeError: myObject is not iterable
//     console.log(key, ':-', value );
// }