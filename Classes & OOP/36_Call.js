// call

function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername(username)

    this.email = email
    this.password = password
}

const evening = new createUser("chai", "chai@fb.com", "123")
console.log(evening);
