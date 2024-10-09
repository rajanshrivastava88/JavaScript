/*

Promise :- The Promise object represents the eventual completion (or failure) of an asynchronous 
           operation and its resulting value.


           A Promise is a proxy for a value not necessarily known when the promise is created. 
           It allows you to associate handlers with an asynchronous action's eventual success 
           value or failure reason. This lets asynchronous methods return values like synchronous 
           methods: instead of immediately returning the final value, the asynchronous method 
           returns a promise to supply the value at some point in the future.


           A Promise is in one of these states:
           
           pending: initial state, neither fulfilled nor rejected.
           
           fulfilled: meaning that the operation was completed successfully.
           
           rejected: meaning that the operation failed.


           The eventual state of a pending promise can either be fulfilled with a value or rejected 
           with a reason (error). When either of these options occur, the associated handlers queued 
           up by a promise's then method are called. If the promise has already been fulfilled or 
           rejected when a corresponding handler is attached, the handler will be called, so there 
           is no race condition between an asynchronous operation completing and its handlers being 
           attached.

*/


/*

JavaScript Promises


                    "I Promise a Result!"

            "Producing code" is code that can take some time

            "Consuming code" is code that must wait for the result

            A Promise is an Object that links Producing code and Consuming code


JavaScript Promise Object :

A Promise contains both the producing code and calls to the consuming code:


Promise Syntax: 

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {  code if successful  },
  function(error) {  code if some error  }
);


     When the producing code obtains the result, it should call one of the two callbacks:
              
               ___________________________________________________
              |  When          |       	Call                      |
              |                |                                  |
              |  Success	   |     myResolve(result value)      |
              |                |                                  |
              |  Error	       |     myReject(error object)       |
              |________________|__________________________________|


              Promise Object Properties

              A JavaScript Promise object can be:

              -Pending

              -Fulfilled

              -Rejected

              The Promise object supports two properties: state and result.

              While a Promise object is "pending" (working), the result is undefined.

              When a Promise object is "fulfilled", the result is a value.
              
              When a Promise object is "rejected", the result is an error object.

*/