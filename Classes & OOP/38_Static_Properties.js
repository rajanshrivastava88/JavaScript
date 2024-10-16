// Static Properties


/*

The static keyword defines a static method or field for a class, or a static initialization block 
(see the link for more information about this usage). Static properties cannot be directly accessed 
on instances of the class. Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas 
static properties are useful for caches, fixed-configuration, or any other data you don't need to be 
replicated across instances.


*/



/*

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return`9988`
    }
}

const rajan = new User("rajan")
//console.log(rajan.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

*/



/*

There are some additional syntax restrictions:

The name of a static property (field or method) cannot be prototype.

The name of a class field (static or instance) cannot be constructor.


*/




class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // Expected output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  // Expected output: "static method has been called."



  /*

Using static members in classes

The following example demonstrates several things:

How a static member (method or property) is defined on a class.
That a class with a static member can be sub-classed.
How a static member can and cannot be called.


  */