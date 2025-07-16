// rest parameter = (...rest) allow a function work with a variable 
//                 number of arguments by bundling them into an array


//                spread = expands an array into seperate elements
//                rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(foods);
//     console.log(...foods);  // add spread operator to expand 
//     // the elemnt
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);


//------------- use return method -------------------------

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// const foods = getFood(food1, food2, food3, food3, food4, food5)

// console.log(foods);


//-------------- sum of bunches numbers together ---------------------

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result
}

// const total = sum(1,2,3)

// console.log(`Your total is $${total}`);


//------------ create a  function to calculate an average ------------

function getAverage(...numbers){

       let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);

console.log(total);


// -------------- Use rest parameter to Combine strings together --------------


function combineString(...strings){
    return strings.join(" ");
}

const fullNmae =  combineString("Mr.", "Spongebob", "Squareoants", "III");

console.log(fullNmae);

