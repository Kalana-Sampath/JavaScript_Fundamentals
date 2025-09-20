// eventListener = Listen for specific events to create interactive web pages 
//                 events: click, mouseover, mouseout 
//                 .addEventListener(click, callback);
//                 .addEventListener(click, anonymous function);   // this way also can be used 
//                 .addEventListener(click, arrow function);         // this way also can be used

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤕";
// }

// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("mouseover", function() {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 😮";
// })

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😀";
// })

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤕";
// }



// myButton.addEventListener("click", changeColor);

// myButton.addEventListener("mouseover", function() {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 😮";
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😀";
// })

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤕";
// }

//----------------------------------

myButton.addEventListener("click", changeColor);

myButton.addEventListener("mouseover", function() {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😮";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me 😀";
})

function changeColor(event) {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
}