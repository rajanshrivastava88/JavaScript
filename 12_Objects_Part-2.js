// Objects Part 2 


// Singleton object constructor


//const twuser = new Object()
const twuser = {}


twuser.id = "123abc"
twuser.name = "Sammy"
twuser.isLoggedin = false

console.log(twuser);



const regularUser = {
    email : "regular@gamil.com",
    fullname: {
        userfullname: {
            firstname : "Rajan",
            lastname : "Srivastava"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


// merging objects

const obj1 = {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}
const obj4= {5: "e", 6: "f"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2) // merge in single object
//const obj3 = Object.assign({}, obj1, obj2, obj4) // optional empty array // through assign() objects all objects assigns
 
const obj3 = {...obj1, ...obj2} // using spread method
console.log(obj3);



// Array of Objects

const users = [
    {
        id: 1,
        email: "raj@gmail.com"
    },
    {
        id: 2,
        email: "ram@gmail.com"
    },
    {
        id: 3,
        email: "laxman@gmail.com"
    },
    
]

users[1].email
console.log(twuser);


console.log(Object.keys(twuser));
console.log(Object.values(twuser));
console.log(Object.entries(twuser)); // It will show the all entries like keys with their values


console.log(twuser.hasOwnProperty);
console.log(twuser.hasOwnProperty('isLogged')); // it checks "isLogged" name has any properties or not 



/*

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

*/




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




/*
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

*/