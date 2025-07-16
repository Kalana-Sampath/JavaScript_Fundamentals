// Method Chaining = Calling one method after another
//                   in one continuous line of code

// ------- NO METHOD CHAINING -------

let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toLocaleUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLocaleLowerCase();
// username = letter + extraChars

// console.log(username);


// ------- WITH METHOD CHAINING -------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); // use method chaining
// all the methods are called one after another
console.log(username);  // Output: First letter capitalized, rest lowercase

