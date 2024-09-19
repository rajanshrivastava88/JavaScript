
// for each loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (val) {
//     console.log(val);
// } )


// Arrow function

coding.forEach( (item) => {
    //console.log(item);
} )


function printMe(item) {
    //console.log(item);
}

//coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",  // objects inside an Array
        languageFileName: "js"
    },
    {
        languageName: "java",       // objects inside an Array
        languageFileName: "java"
    },
    { 
        languageName: "python",    // objects inside an Array
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})