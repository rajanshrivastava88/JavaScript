
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