// Error = An object that is created to represent a problem 
//         that occurs Occur often with user input or establishing 
//         a connection

// try { } = Enclose code that might potentially cause an error 
// catch { } = Catch and handle any thrown Errors from try { }
// finallt { } = (optional) Always executed. Used mostly for clean up
//               ex. close files, close connections, release resources


// ----------------- with error -----------------------------------
// try{
//     console.log(x);
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }

// console.log("You have reached the end!");


// ----------------- without error -----------------------------------
// try{
//     console.log("Hello");
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }

// console.log("You have reached the end!");


// -- another example with user input ---------------------------

const dividend = window.prompt("Error a dividend");

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result =  dividend / divisor;
    console.log(result);
    
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!1");

