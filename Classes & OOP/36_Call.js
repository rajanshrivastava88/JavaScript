/* call Method

The call() method of Function instances calls this function with a given this value and arguments provided individually.


*/
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




function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"