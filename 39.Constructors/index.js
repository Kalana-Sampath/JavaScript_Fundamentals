// constructor = special method for defining the
//               properties and methods of objects

// now our car constructor is a reusable method, where we can define the properties 
// and methods of obejcts we create 
// to use the constructot we want a create a instance of an object

function Car(make, model, year, color){         
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red") 
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(" ")

console.log(car2.make);   
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);



// -------------------------------------------------------------------------------
// you can name this parameter anything, but it can be confusing (like this)
function Car(a, b, c, d){
    this.make = a,
    this.model = b,
    this.year = c,
    this.color = d
}

const car3 = new Car("Ford", 'Mustang', 2024, "red")

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);



// ----------------------------------------------------------------
// add a method
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car4 = new Car("Ford", "Mustang", 2024, "red")

car4.drive();



// constuctor help with code reusability we can reuse it to create many objects 
// instead of having to type them all out manually

