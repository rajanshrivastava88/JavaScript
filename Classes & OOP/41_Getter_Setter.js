
// getter_setter

class User {
    constructor(email, password) {
        this.email = email;
        this.password =password        
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const rajan = new User("r@rajan.ai", "8899")
console.log(rajan.password);
