
// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const evening = new User("Chai", "Chai@gmail.com", "123")
console.log(evening.encryptPassword());

console.log(evening.changeUsername());

