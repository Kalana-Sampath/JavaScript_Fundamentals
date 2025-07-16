// IF STATEMENTS = if a condition is true, execute some code 
//                 of not, do something else

// let age = 23;

// if (age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else {
//     console.log("You must be 18+ to enter this site");
// }


//-------------------------------------------------------------------

// let time = 9;

// if(time < 12) {
//     console.log("Good morning!");
// }
// else{
//     console.log("Good afternoon!");
// }

// let isStudent = true;

// if(isStudent){
//     console.log("You are a student!");
// }else{
//     console.log("You are not a student!");
// }

//-------------------------------------------------------------------

// ----- nested if statements -----
// if statements inside other if statements

// let age = 18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive");
    
//     if(hasLicense){
//         console.log("You have your license!");
//     }
//     else{
//         console.log("You do not have your license yet!");
//     }
// }else{
//     console.log("You must be 16+ to have a license");
    
// }

//-------------------------------------------------------------------

// ------- else if statements -------
// if statements that check multiple conditions

// let age = 0; 

// if(age >= 100){
//     console.log("You are TOO OLD to enter this site");
// }
// else if(age == 0){
//     console.log("You can't enter. You were just born!"); 
// }
// else if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else if(age < 0){
//     console.log("Your age can not be below 0");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }


//-------------------Exercise -------------------

const myText = document.getElementById("myText");-15
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);
    if(age >= 100){
    resultElement.textContent = "You are TOO OLD to enter this site";
}
else if(age == 0){
    resultElement.textContent = "You can't enter. You were just born!";
}
else if(age >= 18){
   resultElement.textContent = "You are old enough to enter this site";
}
else if(age < 0){
    resultElement.textContent = "Your age can not be below 0";
}
else{
    resultElement.textContent = "You must be 18+ to enter this site";
}
}
