// const = a variable that can not be changed
/*   * good practice if you have any constants to 
 make all of the letteres in the variable name uppercase

 important note -: capitalizing your constants is usually
 only done with primitive data types such as numbers in
 booleans reference data types such as string do not nomally
 followed this convention
*/

// const PI = 3.14159; 
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);

// ---------- using text box-------------

const PI = 3.14159; 
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference;
}
