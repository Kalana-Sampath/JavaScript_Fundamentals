// Variables in JavaScript
// -------- variables declare and assignment--------

// let x;
// let y;

// x = 20;

// console.log(x);

    // ------------ numbers -------------

// let age = 25;
// let price = 19.99;;
// let gpa = 3.14159;

// console.log(`You are ${age} years old.`);

    // ------------ strings -------------

// let firstName = "Kalana";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`); 

    // ------------ booleans -------------

// let online = true;
// let isStudent = false;
// console.log(typeof online);
// console.log(`Kalana is online: ${online}`);


// ------------ varibls show in web page -------------

let firstName = "Kalana";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = firstName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = isStudent;

document.getElementById("p1").textContent = `Your name is ${firstName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Is student: ${isStudent}`;

