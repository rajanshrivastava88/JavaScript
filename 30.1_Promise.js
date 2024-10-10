
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Jai Maa", email: "jaimaa@navratri.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})