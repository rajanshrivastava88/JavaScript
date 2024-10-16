
// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const evening = new User("Chai", "Chai@gmail.com", "123")
// console.log(evening.encryptPassword());

// console.log(evening.changeUsername());




// Behind the Scene

function User (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const name = new User("rajan", "rajan@gmail.com",  "8899")

console.log(name.encryptPassword());
console.log(name.changeUsername());

