// destructuring = extract values from arrays and obejects,
//                then assign them to variables in a convenient 
//                  way
//                [] = to perform array distructuring 
//                {} = to perform object distructuring 

//------------ Example 1 ----------------------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// SWAP 2 ELEMENTS IN AN ARRAY 

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);


// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// EXTRACT VALUES FROM OBJECTs

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarepPants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job="Unemployed"} = person2;  // values extract even have diffault 
// //                                                                values ex:- job="Unemployed"

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// DESTRUCTURE IN FUNCTION PARAMETERS


function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34
}

displayPerson(person1);
console.log("");
displayPerson(person2)




