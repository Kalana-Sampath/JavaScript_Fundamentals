// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document object Model)

// 1. document.getElementById()        // ELEMENT OR NULL 
// 2. document.getElementsClassName()  // HTML COLLECTION 
// 3. document.getElementByTagName()   // HTML COLLECTION 
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST 


//   (1) ----------------------------------------------------

const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);


//   (2) -----------------------------------------------

const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);

// fruits[0].style.backgroundColor = "yellow";

// ------ use the enhanced for loop ------------------------------

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }

//--important -- HTML Collections do not have a for each method ----
// we do the type cast our collection to array

// Array.from(fruits).forEach(fruit => {
//     fruit.computedStyleMap.backgroundColor = "Yellow";
// });


//   (3) -------------------------------------------

const h4Elements = document.getElementsByTagName("h4");

// console.log(h4Elements);

// apply style for one element
// h4Elements[0].style.backgroundColor = "yellow";

// apply style for all(multiple) elements
// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// access the all list item elements
const liElements = document.getElementsByTagName("li");

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// use the for each method -- with type casting ----------------------
// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });


//   (4) -------------------------------------------

const element = document.querySelector("h4");
const element1 = document.querySelector("ul");

// element.style.backgroundColor = "yellow";
// element1.style.backgroundColor = "lightgreen";


//   (4) -------------------------------------------

// NODELIST is simmilar to a html collection excepted have build in method
// how ever NODELIST are static

const fruits1 = document.querySelectorAll(".fruits");

// fruits1[0].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

// foods[0].style.backgroundColor = "lightgreen";

// console.log(foods);

// NODELIST has a build in forEach() method

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});



