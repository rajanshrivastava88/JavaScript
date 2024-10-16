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


class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide";
    static calculate(n) {
      return super.calculate(n) * super.calculate(n);
    }
  }
  
  console.log(Triple.description); // 'I triple any number you provide'
  console.log(Triple.calculate()); // 3
  console.log(Triple.calculate(6)); // 18
  
  const tp = new Triple();
  
  console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
  console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // undefined
  console.log(SquaredTriple.customName); // 'Tripler'
  
  // This throws because calculate() is a static member, not an instance member.
  console.log(tp.calculate()); // 'tp.calculate is not a function'
  