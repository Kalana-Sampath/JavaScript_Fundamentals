// setTimeout() = function in JavaScript that allows you to schedule the
//               execution of a function after an amount of time (millisexonds)
//               Timess are approximate (varies based on the workload of
//                the JavaScript runtime env.)

//                setTimeout(callback, delay);

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);


//----------------------------------------------------------------------

// setTimeout(function(){window.alert("Hello")}, 3000);


// ---------------- arrow function ----------------------------------------

// setTimeout(() => window.alert("hello"), 3000);


//----------------------------------------------------------------------

// --- you can use ----
// clearTimeout() = cam cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);


// -- another exmple -- create a button when the click the button call the 
// timeout function

let timeoutId;

function startTimer(){
    setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}