// forEach() = method used to iterate over the elements of and array and 
//            apply a specified function (callback) to each element

//           array.forEach(callback)
//           element, index, array are provided

// let numbers = [1,2,3,4,5];

// numbers.forEach(display);

// function display(element){  // element, index, array are provided
//     console.log(element);
// }

//--------------- double the all the element (miltiplying by 2)----------

// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){  // element, index, array are provided
//     array[index] = element * 2;
// }

// function display(element){  
//     console.log(element);
// }


//------------------ use squre function----------------
// you can use cube... like function


// let numbers = [1,2,3,4,5];

// numbers.forEach(squre);
// numbers.forEach(display);

// function squre(element, index, array){  // element, index, array are provided
//     array[index] = Math.pow(element, 2);
// }

// function display(element){  
//     console.log(element);
// }

//------------------- another example --------------------
// array element uppercase and lowercase

// let frutis = ["apple", "orange", "banana", "coconut"];

// frutis.forEach(uppercase);
// frutis.forEach(display);

// console.log("");


// frutis.forEach(lowercase)
// frutis.forEach(display)

// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function display(element){
//     console.log(element);
// }


// ---------- challenge -: each array element first letter
// capital -----------------------------------------


let frutis = ["apple", "orange", "banana", "coconut"];

frutis.forEach(capitalize);
frutis.forEach(display);


function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}