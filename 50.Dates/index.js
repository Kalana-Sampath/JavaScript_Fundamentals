// Date objects = objects that contain values that represent dates and times
//                These date_object can be changed and formatted

// const date = new Date();

// console.log(date);


// ------------------ create a custom date ----------------------------
//order ----- Date(year, month, day, hour, minute, second, ms) 

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// console.log(date);

//--------------------------------------------------------------------

// ------------- * passing in string representation of time to the date 
// constructor is also valid

// const date = new Date("2024-01-02T12:00:00Z");

// another format ---- within the date constructor pass in a given amount
// of time in milliseconds since epic
// if you pass to the 0 to the date constructor you will be given a date
// and time around December 31st 1969 

// pass time is calculate date since this date
// const date = new Date(1700000000000) // 1.7 billion milisecond since 
// the epic date 
// passing in miliseond could be help for some sort of timer

// console.log(date);


// --------- you can extract indidual value from the date object ------

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();   // remember january is 0 not 1 then the 
// //                                  get the month (month + 1)
// const day = date.getDate();   
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const second = date.getSeconds();

// // you need the day of the week 
// const dayOfWeek = date.getDay(); // this also sunday is 0

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(second);
// console.log(dayOfWeek);


//  ---- whith the date object you can even set the date ---------------

// const date = new Date();

// date.setFullYear(2026);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(date);


// ------- you can even compare date as well ---------------------

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}


