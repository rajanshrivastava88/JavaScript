

// Destructuring of Objects

const course = {
    coursename: "JavaScript",
    price: "1000",
    courseInstructor: "Rajan"
}

course.courseInstructor
course.coursename
course.price


// const {courseInstructor} = course
// console.log(courseInstructor);


const {courseInstructor: teacher} =  course
console.log(teacher);


const {courseInstructor: instructor, price: Rate, course: js} = course // now courseInstructor known as instructor
console.log(course.courseInstructor, instructor);
console.log(course.price, Rate);
console.log(course.course, js);

//console.log(instructor, Rate, js);

//console.log(`My name is ${instructor} and im studing ${js} which price is ${Rate}`);


// How Api's call works in json format

// {
//     "name": "rajan",
//     "coursename": "js in hindi",
//     "price": "free"
// }


const student = {
    id: "12345678",
    name: "Rajan Srivastava",
    roll_no: 811507721,
    branch: "Information Technology",
    college_name : "Bharati Vidyapeeth College of Engineering"
}

const {id: college_icard, name: RajanSri } = student
console.log(college_icard, RajanSri);

