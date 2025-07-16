// logical operators = used to combine or manipulate boolean values
//                      (true or false)

//                  AND = &&
//                  OR  = ||
//                  NOT = !

const temp = 20;

// if(temp > 0 && temp <= 30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The wether is BAD");
// }

if (temp <= 0 || temp > 30){
    console.log("The wether is BAD");
}else{
    console.log("The wether is GOOD");
}

const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}else{
    console.log("It is SUNNY");
}


