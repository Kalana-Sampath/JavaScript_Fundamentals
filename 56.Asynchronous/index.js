// synchronus = Execute line by line consecutively in a sequential manner 
//              Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without
//                Doesn't block the execution flow and allows the program to code 
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

// setTimeout(() => console.log("Task 1"), 3000)

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");


//--------------------------------------------------------
//-- using callback that one way handle asynchronous code -

function fun1(callback){
    setTimeout(() => {console.log("Task 1");
                    callback()}, 3000)
}

function fun2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

fun1(fun2);

