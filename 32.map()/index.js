// .map() = accepts a callback and applies that function to each element of
//         an array, then return a new array

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square)

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

// --------------------- ** note :- map method simmilar to the forEach but 
// after the callback return element display as a array and not change the
// first array but
// forEach change the values the first array as well


//---------------------------- another example -------------------------

// const students = ["spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }   

// ----------------------- another example --------------------------------

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattDates = dates.map(formatDates);

console.log(formattDates);

function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}





