// Dates

let myDate = new Date()
console.log(myDate.toString()); // its shows the current date and time of that particular area (which can be- city, country)

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2024, 0, 20)  // the months start from 0 menas january and 1 means february and so on
console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date(2024, 0, 20, 5, 3)  
console.log(myCreatedDate1.toLocaleString());


let date = new Date("2024-09-14")
console.log(date.toLocaleString());


let date1 = new Date("14-09-2024")
console.log(date1.toLocaleString());



let myTimeStamp = Date.now()  // its shows current time in current date but in milli seconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()//1000));

console.log(Math.floor(Date.now()/(60*60*24*1000)));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


`${newDate.getDay()} and the time`

newDate.toLocaleString ('default', {
    weekday: "long",
});