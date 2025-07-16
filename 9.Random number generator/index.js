// RANDOM NUMBER GENERATOR

// let randomNum = Math.floor(Math.random() * 6) + 1; 
/*
This generates a random number between 1 and 6, inclusive.
You can change the range by modifying the values in the formula.
In this equation 1 is the minimum value and 6 is the maximum value.
Note: Math.random() generates a floating-point number between 0 (inclusive)
and 1 (exclusive).
using Math.foor() to round it down to the nearest integer.
*/

// numbers between 1 and 100 
// let randomNum = Math.floor(Math.random() * 100) + 1;

// Random number between certain range
// let min = 50;
// let max = 100;   
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// why use (max - min)?
/* because Math.random() generates a number between 0 (inclusive) 
and 1 (exclusive),
*/
/* and add min to the generate max value , there fore we want subtract min
 from max to get the range of numbers we want to generate. 
 */
/* This ensures that the random number is inclusive of both min and 
max values.
*/

// console.log(randomNum);


// -------- Randon Number Generator with Button --------

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

