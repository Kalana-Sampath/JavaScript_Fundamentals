// array = a variable like structure that can hold 
//          more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits[3] = "coconut";   // we can add element using array name and index

// fruits.push("mango"); // push to the element into the end
// fruits.pop(); // remove the last element 
// fruits.unshift("grapes") // add a element to the begining
// fruits.shift(); // remove elemement from the begining

 
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let numOfFruits = fruits.length; // length of an array
// let index = fruits.indexOf("orange");

// console.log(numOfFruits);
// console.log(index);

//------------------- easy way to get all element from array----------
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// reverese order of array element 
// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

//----################ shorcut way display an array (encahnced) ##########--------
// for(let fruit of fruits){
//     console.log(fruit); 
// }


//------ Sort an array -----------------------------
// fruits.sort(); // sort by alphabatical order
// console.log(fruits);

fruits.sort().reverse();  
console.log(fruits);  // reverse alphabatical order


