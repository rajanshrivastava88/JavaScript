/*
Async Code in JavaScript

Async Function

The async function allows us to write promise-based code as if it were synchronous. 
This ensures that the execution thread is not blocked.

Promise Handling: Async functions always return a promise. If a value is returned that is not a promise, 
JavaScript automatically wraps it in a resolved promise.


          JavaScript   (Talking abput Default JavaScript)
                |
                |
                |_____________ Synchronous
                |
                |
                |_____________ Single threaded



       ---> Execution Context
                |________________ Execution Context execute one line of code at a time.
                                    |
                                    |________ console.log -> 1
                                    |
                                    |________ console.log -> 2
                                    |
                               _____|______      _____________
                              | CALL Stack |    | Memory Heap | 
                              |____________|    |_____________|

               NOTE :- Each operation waits for the last one to complete before executing.               




               Blocking Code                     VS              Non-Blocking Code
                     |                                                   |
               It Block the flow of Program.                     It does not block execution.
                     |                                                   |
                Read File Sync(Synchronous).                     Read File Async (Asynchronous)





*/