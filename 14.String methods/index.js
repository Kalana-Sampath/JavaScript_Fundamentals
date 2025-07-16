// string methods = allow you to manipulate and work with
//                  text (strings) 

let userName = " Kalana";

console.log(userName.charAt(1)); // returns the character at 
// the specified index
console.log(userName.indexOf("n")); // returns the index of the first 
// occurrence of a specified character
console.log(userName.lastIndexOf("a")); // returns the index of the last 
// occurrence of a specified character
console.log(userName.length); // returns the length of the string
console.log(userName.trim()); // removes whitespace from both ends 
// of the string
console.log(userName.toUpperCase()); // converts the string to uppercase
console.log(userName.toLowerCase()); // converts the string to lowercase
console.log(userName.repeat(2)); // returns a new string with the specified number of copies of the original string
console.log(userName.startsWith(" K")); // checks if the string starts 
// with the specified characters
console.log(userName.endsWith("na")); // checks if the string ends 
// with the specified characters
console.log(userName.includes("ala")); // checks if the string contains
// the specified characters






// --------------------------------------------------------------

console.log(userName.slice(1, 5)); // extracts a section of the string
// and returns it as a new string
console.log(userName.split(" ")); // splits the string into an array
console.log(userName.replace("Kalana", "John")); // replaces a specified
// value with another value in the string
console.log(userName.search("ana")); // searches for a specified value
// and returns its position
console.log(userName.concat(" Doe")); // joins two or more strings
console.log(userName.padStart(10, "*")); // pads the string from the start
console.log(userName.padEnd(10, "*")); // pads the string from the end
console.log(userName.match(/a/g)); // returns an array of all matches
console.log(userName.localeCompare(" Kalana")); // compares two strings
// and returns a number indicating whether the reference string comes before,   



