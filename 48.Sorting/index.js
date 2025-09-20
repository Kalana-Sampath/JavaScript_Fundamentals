// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings;


// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// fruits.sort();

// console.log(fruits);


// ------------------------ array with numbers -----------------------

// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => a - b);

// // to revese order

// numbers.sort((a, b) => b -a);

// console.log(numbers);


// ------------------ another example ----------------------------------

const people = [{ name: "Spongebob", age: 30, gpa: 3.0 },
                { name: "Patrick", age: 37, gpa: 1.5 },
                { name: "Squidward", age: 51, gpa: 2.5 },
                { name: "Sandy", age: 27, gpa: 4.0 }];

               
// people.sort((a, b) => a.age - b.age)
// people.sort((a, b) => a.gpa - b.gpa)

// console.log(people);

// if you need to sort by a property that contains a string within an 
// object there's different formula

people.sort((a, b) => a.name.localeCompare(b.name))  // this method will 
//examine two string for lexicographic order

console.log(people);
