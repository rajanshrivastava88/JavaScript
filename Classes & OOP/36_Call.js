// call

function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // .call is used to hold the refernce variable (current execution context ko kisi aur function ko pass kar deta hai)

    this.email = email
    this.password = password
}

const evening = new createUser("chai", "chai@fb.com", "123")
console.log(evening);
