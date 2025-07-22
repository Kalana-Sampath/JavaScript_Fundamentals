// arrow functions = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code


//-------- normal way --------------------------

// function hello(){
//     console.log("Hello");
// }

// hello();

//---------------------- as a function expression -------------------------

// const hello = function(){
//     console.log("Hello");
// }

// hello();

//---------------- using arrow function ------------------------------

// const hello = () => console.log("Hello");

// hello();

// ---------- we can use constatnt or variable in the parentheses anc calling
// as well------------------------------------------------
// send some argument to the arrow funtion

// const hello = (name) => console.log(`Hello ${name}`);

// hello("Kalana");

// --------- use two line of code in after => --- want use {} ----------  

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)};
//                                                     ;

// hello("Kalana", 18);


//----------------------------- another example --------------------------

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

//    -- use arrow function -------- for setTimeout function-----------

setTimeout( () => console.log("Hello"), 3000);

// ------ use arrow function with map() filter() and reduce() -----------

const numbers = [1, 2, 3, 4, 5, 6]

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));

const evenNums = numbers.filter((element) =>element %2 === 0);
const oddNums = numbers.filter((element) =>element %2 !== 0);

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);






