
// Mathpi

// Object.getOwnPropertyDescriptor(Math)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true

    orderchai
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperties(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of chai) {
    console.log(`${key} : ${value}`);
    
}