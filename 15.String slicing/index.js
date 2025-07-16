// string slicing = creating a substring from a portion of another string 

//----                      string.slice(start, end)

// const fullName = 'Kalana Sampath';

// let firstName = fullName.slice(0, 6); 
// let lastName = fullName.slice(7, 14); 

//---- let lastName = fullName.slice(7); - also works

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstChar); 
// console.log(lastChar);

// console.log(firstName);
// console.log(lastName);

//--------- But not everytime get the first name as expected because of name length might be different
// ----like ex-: Kalana , Pathum, Chamira .. like that 
// -----then we want some dynamic way to get the first name

const fullName = "Pathum Nissanka";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); // +1 to skip the space

console.log(firstName); // Output: Pathum
console.log(lastName); // Output:  Nissanka

const email = "Kalana@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1)

console.log(username);
console.log(extension);






