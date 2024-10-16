// Object Literals

const user = {
    username: "rajan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);


// Constructor Functions -> new

// Constructor functions allow us to create a multiple instanses from only on objects

// const promiseOne = new Promise()
// const date = new Date()




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome to mu Home ${this.username}`);

    }

    return this
}

const userOne = new User("rajan", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

// know about new keyword







/*


            function ----------------
                                    |
                                    |
                                    |
            Array -------------------> Object --------> null
                                    ^
                                    |
                                    | 
            String ------------------



*/