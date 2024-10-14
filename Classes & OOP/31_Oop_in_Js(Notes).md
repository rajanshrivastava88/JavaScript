
# JavaScript and Classes


## OOP


## Object
- collection of properties and methods
- toLowerCase

## Why use OOP

## Parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

In JavaScript, object-oriented programming (OOP) can be implemented in different ways: using **Object Literals**, **Constructor Functions**, **Prototypes**, and the more modern approach, **Classes**. Each has its own role and characteristics. Let's go over them one by one.

### 1. **Object Literal**

An **object literal** is a simple way to create an object in JavaScript using a pair of curly braces `{}`. It is used to create a single, specific object without using a constructor or a class.

#### Example:

```javascript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();  // Output: Hello, my name is John
```

Here, `person` is an object literal. The properties `name` and `age` and the method `greet` are directly assigned within the object. This method is simple but doesn't provide a way to create multiple objects with shared behavior (for that, we use constructors or classes).

### 2. **Constructor Function**

A **constructor function** is a function that is used to create multiple objects of the same type. It acts like a blueprint for objects. When called with the `new` keyword, it creates an instance of an object.

#### Example:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet();  // Output: Hello, my name is John
jane.greet();  // Output: Hello, my name is Jane
```

Here, `Person` is a constructor function. When we use `new Person()`, it creates a new instance of the object with its own properties (`name`, `age`) and methods (`greet`). The `this` keyword refers to the new instance being created.

### 3. **Prototypes**

In JavaScript, every function (including constructor functions) has a `prototype` property that is used to share properties and methods across all instances of the constructor function. This is a powerful feature of JavaScript that allows memory-efficient sharing of methods.

#### Example:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet();  // Output: Hello, my name is John
jane.greet();  // Output: Hello, my name is Jane
```

Here, instead of defining `greet` inside the constructor, we added it to the `Person.prototype`. This ensures that all instances of `Person` share the same `greet` method, which is more memory-efficient.

**Prototypes** are key in JavaScript for inheritance, allowing objects to "inherit" methods from their prototype chains.

### 4. **Classes**

In ES6 (ECMAScript 2015), **classes** were introduced as syntactical sugar over constructor functions and prototypes. While they look more familiar to developers from other OOP languages, under the hood, they still use prototypes.

#### Example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method defined in the prototype
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet();  // Output: Hello, my name is John
jane.greet();  // Output: Hello, my name is Jane
```

Here, `Person` is a class with a constructor method that initializes `name` and `age`. The `greet` method is defined inside the class, and it will be added to the `Person.prototype` behind the scenes, just like with constructor functions. Classes provide a cleaner and more intuitive way to create objects in JavaScript.

### 5. **Instances (new, this)**

An **instance** refers to an object that is created from a class or a constructor function. When you use the `new` keyword, a new instance of an object is created.

The `this` keyword refers to the current instance of the object. Inside a constructor function or class, `this` points to the new object that is being created.

#### Example:

```javascript
class Car {
    constructor(model, year) {
        this.model = model;  // 'this' refers to the new instance
        this.year = year;
    }

    start() {
        console.log(`${this.model} (${this.year}) is starting...`);
    }
}

const car1 = new Car('Toyota', 2022);  // 'new' creates a new instance
const car2 = new Car('Honda', 2020);

car1.start();  // Output: Toyota (2022) is starting...
car2.start();  // Output: Honda (2020) is starting...
```

In this example, `car1` and `car2` are instances of the `Car` class, and `this.model` refers to the model of the current instance (`car1` or `car2`).

---

### Summary of the OOP Parts:

- **Object Literals**: Simple objects created with `{}` that encapsulate specific properties and methods.
- **Constructor Functions**: Functions that act as blueprints for creating multiple objects using the `new` keyword.
- **Prototypes**: Mechanism for sharing properties and methods across instances to save memory.
- **Classes**: ES6 syntactic sugar over constructor functions and prototypes, making OOP more intuitive.
- **Instances (new, this)**: Objects created from constructors or classes. The `new` keyword creates an instance, and `this` refers to the current instance.

This combination allows JavaScript to provide robust OOP capabilities, balancing between simplicity and flexibility.

## 4 pillers

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism


In object-oriented programming (OOP), the four pillars form the foundation of the design and structure of applications. Let's go over each of these principles in JavaScript with examples:

### 1. Abstraction

**Abstraction** is the concept of hiding the complex implementation details and exposing only the necessary functionality to the user. It helps in reducing complexity and isolating the impact of changes.

#### Example:

```javascript

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    // Method to start the car (abstracting away complex engine logic)
    start() {
        console.log(`${this.model} is starting...`);
        this._startEngine();
    }

    // Private method not exposed directly to the user
    _startEngine() {
        console.log('Engine started');
    }
}

const myCar = new Car('Toyota', 2022);
myCar.start();  // Output: Toyota is starting... Engine started

```

Here, `start()` is the abstraction that hides the complex details of `_startEngine()`, making the process simpler for the user.

### 2. **Encapsulation**

**Encapsulation** is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, or class. It also involves controlling access to the data to prevent external interference.

#### Example:

```javascript

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance;  // Private variable (conventionally denoted by `_`)
    }

    // Getter to access balance safely
    getBalance() {
        return this._balance;
    }

    // Method to update balance safely
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }
}

const account = new BankAccount('John Doe', 1000);
console.log(account.getBalance());  // Output: 1000
account.deposit(500);
console.log(account.getBalance());  // Output: 1500

```

Here, `getBalance()` and `deposit()` encapsulate access to the `_balance` property, preventing direct access or modification from outside the class.

### 3. **Inheritance**

**Inheritance** allows one class to inherit the properties and methods of another class. It helps in code reusability and establishing a hierarchical relationship between classes.

#### Example:

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Dog class inherits from Animal class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak();  // Output: Buddy barks.
```

In this example, the `Dog` class inherits from the `Animal` class and overrides the `speak()` method, demonstrating inheritance.

### 4. **Polymorphism**

**Polymorphism** allows objects of different classes to be treated as objects of a common superclass. It also allows methods to be redefined in subclasses (method overriding).

#### Example:

```javascript
class Animal {
    speak() {
        console.log('The animal makes a sound');
    }
}

class Cat extends Animal {
    speak() {
        console.log('The cat meows');
    }
}

class Dog extends Animal {
    speak() {
        console.log('The dog barks');
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

const cat = new Cat();
const dog = new Dog();

makeAnimalSpeak(cat);  // Output: The cat meows
makeAnimalSpeak(dog);  // Output: The dog barks
```

Here, `Cat` and `Dog` both override the `speak()` method of the `Animal` class. The `makeAnimalSpeak()` function demonstrates polymorphism, treating different objects as the same type (`Animal`), but calling their specific `speak()` implementations.

---

In summary:
- **Abstraction** hides complexity.
- **Encapsulation** restricts direct access to some of an object's components.
- **Inheritance** allows the reuse of code.
- **Polymorphism** enables a unified interface to interact with different object types.