/*

An API (Application Programming Interface) is a set of rules, protocols, and tools that 
allows different software applications to communicate with each other.



One of the popular ways to perform API requests in JavaScript is by using Fetch API. 
Fetch API can make GET and POST requests, JavaScript’s Fetch API is a powerful tool for 
developers seeking to retrieve this data efficiently. This guide focuses on using Fetch 
API to master the art of “GET” requests, the essential method for gathering information from APIs.


What is the JavaScript Fetch API?

The Fetch API provides an interface for fetching resources (like JSON data) across the web. 
It offers a more powerful and flexible alternative to traditional XMLHttpRequest.

*/


// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error);
)