
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {

//     if (myImg.style.display === "none") { 
//         myImg.style.display = "block"; 
//         myButton.textContent = "Hide";
//     }   
//     else {
//         myImg.style.display = "none"; 
//         myButton.textContent = "show"; 
//     }
// });


// Using visibility instead of display to keep the space occupied by the image
// when it is hidden. This way, the button does not jump around when clicked
// and the layout remains stable. The image is still hidden but the space is reserved
// to give the space for image to be hidden initially

myButton.addEventListener("click", event => {

    if (myImg.style.visibility === "hidden") { 
        myImg.style.visibility = "visible"; 
        myButton.textContent = "Hide";
    }   
    else {
        myImg.style.visibility = "hidden"; 
        myButton.textContent = "show"; 
    }
});