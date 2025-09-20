// classList = ELement property in JavaScript used to interact 
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage

// add()
// remove()
// toggle(Remove if present, add if not present)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");



// ------------------------------------------------------------------
// add the hover class

myButton.classList.add("hover");

// ------- add hover class to if the mouse is over the button -------
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");    
});

// // ------- remove hover class if the mouse is not over the button -------
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");    
});



// ------------------------------------------------------------------
// toggle the enabled class

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});



// ------------------------------------------------------------------
// replace method use to one class with another classes

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
});



// ------------------------------------------------------------------
// contains method use to if an element contains a class this will return 
// true and if doesn't it return false 

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
})


// *** using class list, 
// html element has class list property, we can reuse css classes amongst
// many html element 

const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");



// ----- challenge round -------------------------------------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
    })
})



