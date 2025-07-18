// callback = a function that is passed as an argument 
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading a file 
//            2. Network requests
//            3. Interacting with databases

//           "Hey, when you're done, call the next."


// function hello() {
//     console.log("Hello!");
// }

// hello();

//--------------------- use callback ---------------

// hello(goodbye);  // passed a goodbye function as a argument
//                  // to the hello function
        
// function hello(callback){    // add a matching parameter 
// //                          call the callback 
//     console.log("Hello!");
//     callback();   // after everyting with in this function complete
//                   // let's take our callback then invoke it by adding 
//                   // a set of parentheses  (invoke meanning call)
// }

// function goodbye(){
//     console.log("Goodbye!");
// }


//---------------------- create another function --------------------------

hello(leave);  
        
function hello(callback){    // add a matching parameter 
//                          call the callback 
    console.log("Hello!");
    callback();   // after everyting with in this function complete
                  // let's take our callback then invoke it by adding 
                  // a set of parentheses  (invoke meanning call)
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}


// ---------- you can pass callback as well as other arguments to a function-

// sum(displayConsole, 1,2);

// function sum(callback, x,y){
//     let result = x + y;
//     callback(result)
// }

// function displayConsole(result){
//     console.log(result);
// }


//------------- create a separete function to display the result
//                      to our doucument object window---------

sum(displayPage, 1,5);

function sum(callback, x,y){
    let result = x + y;
    callback(result)
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

