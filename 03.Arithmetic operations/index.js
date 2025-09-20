// arithmetic operators = operands (values, variables, etc.)
//                        operators = (+, -, *, /, %, ** )
//                      ex. 11 = x + 5; 

let students= 31;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;    
students = students ** 2; 
let extraStudents = students % 2; 

students += 1; // increment by 1
students -= 1; // decrement by 1
students *= 2; // multiply by 2
students /= 2; // divide by 2
students **= 2; // exponentiation by 2
extraStudents %= 2; // remainder when divided by 2


//------------ Another way to increment operators -----------------

students++; // increment by 1
students--; // decrement by 1


console.log(students);
console.log(extraStudents); 


//-------------- Operator Precedence -----------------
/*
   operator precedence
   1. parantheses ()
   2. exponents
   3. multiplication & division & modulo
   4. addition and subtraction

*/

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result); 

let result1 = 12 % 5 + 8 / 2;  // first 8 / 2 = 4, then 12 % 5 = 2, so result1 = 2 + 4 = 6

console.log(result1); 

let result2 = 6 / 2 ** (2 + 5); // first (2 + 5) = 7, then 2 ** 7 = 128, so result2 = 6 / 128 = 0.046875

console.log(result2); 