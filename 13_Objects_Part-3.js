// Destructuring of Objects

const course = {
    course: "JavaScript",
    price: "1000",
    courseInstructor: "Rajan"
}

//course.courseInstructor

const {courseInstructor: instructor, price: Rate, course: js} = course

// console.log(course.courseInstructor, instructor);
// console.log(course.price, Rate);
// console.log(course.course, js);

//console.log(instructor, Rate, js);

console.log(`My name is ${instructor} and im studing ${js} which price is ${Rate}`);


const student = {
    id: "12345678",
    name: "Rajan Srivastava",
    roll_no: 811507721,
    branch: "Information Technology",
    college_name : "Bharati Vidyapeeth College of Engineering"
}

const {id: college_icard, name: RajanSri } = student
console.log(college_icard, RajanSri);

