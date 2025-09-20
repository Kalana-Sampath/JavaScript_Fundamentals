// ------------ EXAMPLE 1 <hr> ---------------------

// STEP 1 CREATE THE ELEMENT 
// const newH1 = document.createElement("h1");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newLink, box4);

 //          -------------- what happen not have the id for each div element --------------
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// REMOVE HTML ELEMENT 
// document.getElementById("box1").removeChild(newH1);     // anytime want to remove element you need to use the parent element



// ------------- EXAMPLE 2 <li> ---------------------
// STEP 1 CREATE THE ELEMENT 
const newListitem = document.createElement("li");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListitem.textContent = "coconut";
newListitem.id = "myH1";
newListitem.style.fontWeight = "bold";
newListitem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListitem);
document.body.prepend(newListitem);
document.getElementById("fruits").append(newListitem);
document.getElementById("fruits").prepend(newListitem);

// const box4 = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

 //          -------------- what happen not have the id for each list element --------------
// const boxes = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

// REMOVE HTML ELEMENT <li>
// document.getElementById("fruits").removeChild(newListItems);

