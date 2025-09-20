// Arrays Of Objects

const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];


// console.log(fruits[1].name);
// console.log(fruits[3].calories);


// add a new object you can use the push method

// fruits.push({name: "grapes", color: "purple", calories: 62})

// to remove a element 

// fruits.pop();

// to remove element from certain indices

// fruits.splice(1, 2);

// console.log(fruits);


// use forEach method to Loop through the elements of array 

// fruits.forEach(fruit => console.log(fruit));

// fruits.forEach(fruit => console.log(fruit.calories));


// map() method run each element through a function and return a new array 

// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// const fruitColors = fruits.map(fruit => fruit.color);

// console.log(fruitColors);

// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitCalories);



//-- filter() wil return a new array after using each element and checking 
// a condition ------------------------------


// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);


//-------- reduce()  to return a single value --------------------------
// in this case object

const maxFruit = fruits.reduce( (max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);
 
console.log(maxFruit);

const minFruit = fruits.reduce( (min, fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min);
                                
console.log(minFruit);










