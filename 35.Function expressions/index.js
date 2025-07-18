// function declaration = define a reusable block of code that performs a
//                        specific task

// function hello(){
//     console.log("Hello");
// }

// function expression = a way to define function as value or variable

// const hello = function(){
//     console.log("Hello");
// }

// hello();

//---------------------------------------------------------------------

// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello, 3000);    // callback to a function ex-: hello

// ------------ * insted of using function declaration we can pass function
//     expression as a argument (entire function)

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

//--------------use the map method with function expression --------------

// const numbers = [1, 2, 3, 4, 5, 6];

// const square = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// })

// console.log(square);
// console.log(cubes);

// ----------------------select odd numbers and even numberes---------------

const numberes = [1, 2, 3, 4, 5, 6];

const evenNums = numberes.filter(function(element){
    return element % 2 === 0;
})

const oddNums = numberes.filter(function(element){
    return element % 2 !== 0;
})

const total = numberes.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(evenNums);
console.log(oddNums);
console.log(total);



// ------------ use in function expression -----

//    1. Callback in asynchronous operations
//    2. Higher-Order Functions 
//    3. Closures
//    4. Event Listeners









