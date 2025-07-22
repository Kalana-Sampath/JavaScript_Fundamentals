// Nested obejects = Objects inside of other Objects.
//                   Allows you to represent more complex data structures
//                   Child Object is enclosed by a Parent Object

//                   Person{Address{}, ContactInfo{}}
//                   ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);  // access the nested obeject 
                                          // use property adresses twice

// if you want to loop through the properties of a nested object you can 
// write a for loop 

// for(const property in person.address){
//     console.log(person.address[property])
// }


// ----------- another example --------------------------------------

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");
                                
const person2 = new Person("Patrick", 37, "128 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person3 = new Person("Squidward", 30, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");                                          


console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);







