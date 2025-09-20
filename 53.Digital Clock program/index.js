// DIGITAL CLOCK PROGRAM

// function updateClock(){

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, 0);
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const timeStaring =  `${hours}:${minutes}:${seconds}`;
//     document.getElementById("clock").textContent = timeStaring;
// }

// updateClock();
// setInterval(updateClock, 1000);


// -------------------------------------------------------------------
// ---------- to convert 12 hour clock -----------------------------

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeStaring =  `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeStaring;
}

updateClock();
setInterval(updateClock, 1000);