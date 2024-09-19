
// for in loop


const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    //console.log(myObject[key]);

}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ['Js', 'rb', 'ry', 'Java', 'Cpp']

for (const key in programming) {
    //console.log(programming[key]);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { // map is not iteratible in for loop
    console.log(key);
}


// We will use for in loop when we will use loop inside the Objects


// Arrays ke under me for of loop ka use karenge