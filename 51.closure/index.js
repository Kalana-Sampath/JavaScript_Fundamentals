// closure = A function defined inside of another function, the inner
//           function has access to the variables and scope of the outer
//           function.
//           Allow for private variables and state maintenance 
//           Used frequently in JS frameworks: React, Vue, Angular

// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
        
//     }

//     inner();    // if you want to get the inner function output from the 
//                   // outer function want to call it here.
// }

// outer();

// everything with the outer function is part of a closure 


// ---------- another example -------------------------------------
// -- a closure can maintain the state of a variable ---------------
// ----------------------counter program ---------------------

// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);

//     }
//        // how do we access the scope within the create counter function
//         // we have another possibility we will return an object (increament method) we will 
//         // need a set of curly braces 

//     return {increment};
// }

// const counter = createCounter(); // create a object 
//                                 // not only increment object we have 
//                              // count variable as well
// counter.increment();
// counter.increment();


// -------------------------------------------------------------
// -------------- your closure can be more than one function 

// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);

//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount}
//        // how do we access the scope within the create counter function
//         // we have another possibility we will return an object (increament method) we will 
//         // need a set of curly braces 

//     return {increment};
// }

// const counter = createCounter(); // create a object 
//                                 // not only increment object we have 
//                              // count variable as well
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);


// ------------------ another exmaple ---------------------------------
// ---- we are going to closure for a game ----------------------------


let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}

increaseScore(5);
increaseScore(6);
decreaseScore(3);
console.log(`The final score is ${getScore()}pts`);
