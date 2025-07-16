// spread operator = ...allows an iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);


//----------- to string -----------------

// let username = "Kalana Sampath";
// let letter = [...username];

// console.log(letter);

// -------- to add some special character though the 
// expena items(elements) like eg:- (-) dash

// let username = "Kalana Sampath";
// let letter = [...username].join("-");

// console.log(letter);

// ------------- shallow copy-------------------
// shallow copy mean diffrent data stucture but 
// there are identical values

// let fruits = ["apple", "orange", "banana"];
// let newFruits = [...fruits]
// we have two diffrent arrays but they have identical 
// characters

// console.log(newFruits);


//----------------------------------------------

// we can combine two or more arrays using spread
// operator

let fruits = ["apple", "orange", "banana"];
let vegitables = ["carrort", "celery", "potatoes"];

// let foods = [...fruits, ...vegitables];
// we have add seperate element as well 
let foods = [...fruits, ...vegitables, "eggs", "milk"];
console.log(foods);






