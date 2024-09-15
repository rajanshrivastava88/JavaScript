// Objects Part 2 

const tinderuder = new Object()  // Singleton object constructor
//console.log(tinderuder)


const myUser = {} // non singleton object literal method  or adding objects into the empty object

myUser.name = "Rajan"
myUser.id = "1234"
myUser.Loggedin = true
//console.log(myUser);

const study = {
    id: "112",
    //studentname : " Rajan ",

    username : {
        firstname : 'Raj',
        lastname : 'Sri',

        combinename : {
            fullname : "RajSri"
        }
    }
}
//console.log(study.username.combinename);

const object1 = {1: "Rajan", 2: "Tushar"}
const object2 = {1: "Srivastava", 4: "Arora"} // if same keys will be there then only last object key will be updated


//const object3 = {object1, object2}

const object3 = Object.assign({}, object1, object2, object1)  //empty curly bracket{} is a target object in which we fill object1, object2(source object) we assign the value
//console.log(object3, object2);

Object.assign(object1, object2)
//console.log(object1)

//const object3 = {...object1, ...object2}; // Merge using spread method
//console.log(object3);

/* 
const school = [
    {

    },
    {
        id : 1,
        name: "Rajan",
        Roll_No: 12345
    },
    {
        id : 1,
        name: "Rajan",
        Roll_No: 12345
    },
    {
        id : 1,
        name: "Rajan",
        Roll_No: 12345
    },
    {

    },
    {

    },
]

*/

// school.push("Rajan")
// console.log(school);
// school.pop();
// console.log(school);


console.log(Object.keys(myUser)); // It prints the all keys of objects
console.log(Object.values(myUser));  // It prints the all values of objects
console.log(Object.entries(myUser))  // It prints the all entries of objects

console.log((myUser.hasOwnProperty('LoggedIn')));

const fruit = {
    name: "Apple",
    useful: "Useful for good Health",
    milk: "Provide us crbohydrate",
    vegitables: "Palak provide carbon",

    username : {
        firstfruit: "Pineapple",
        fruitname: {
            king_of_fruits : "Mango",
        }
    }

}

console.log(fruit.username.fruitname);