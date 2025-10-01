// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name 

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${person2.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${person2.favFood}`)}
}

person1.eat();
person2.eat();

// -------------- if you are using outside of any object------------------

console.log(this);   // --- return the window obeject (browser)

// --------- * important note ---- this key words not work with arrow 
// --- function   ---------------------------------------------------------

const person3 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.eat();



