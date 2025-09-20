// eventListener = Listen for specific events to create interactive web 
//                pages 
//                events: keydown, keyup
//                doucment.addEventListener(event, callback);


// document.addEventListener("keydown", event => {
//     console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//     console.log(`Key up = ${event.key}`);
// });


//    ---   add event listener to a HTML element   ---

// const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});

// using the arrow keys to move the elemtent

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault(); // prevent scrolling the page with arrow keys

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;  
            case "ArrowLeft":
                x -= moveAmount;
                break;      
            case "ArrowRight":
                x += moveAmount;
                break;      
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
})

let 