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




The fetch() method of the Window interface starts the process of fetching a resource from the network, 
returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL 
or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that 
indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


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