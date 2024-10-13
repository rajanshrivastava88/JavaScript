
// Inheritance

const User = {
    name: "ram",
    email: "ram@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "RamRamji   "

String.prototype.trueLength =  function() {
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"rajan".trueLength()
"iceTea".trueLength()
