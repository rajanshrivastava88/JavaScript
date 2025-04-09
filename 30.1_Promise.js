
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()

    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");

})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Jai Maa", email: "jaimaa@navratri.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true // false (both can be used)
        if (!error) {
            resolve({ username: "rajan", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



/*

// or it can be also used as

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



// promise is a type of Object

*/

// Async and await can't handles the error directly



/*


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true

        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive() 

// This error originated either by throwing inside of an async function without a catch block



*/





/*
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true

        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);

    }
}

consumePromiseFive()

*/





/*

// fetch api data in json format printing

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

*/



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => console.log(error))