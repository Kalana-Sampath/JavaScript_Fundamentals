// static = keyword that defines properties or methods that belong 
//          to a class itself rather than the obejct created
//          from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;
}

// **** important - anything declared as static belongs to the class itself and not any object created from that class 

console.log(MathUtil.PI)  // we do not need to create an object in order to use this property



// -------------------------------------------------------------------------------------

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10))



// ----------------------------------------------------------------------------------
// ------ mix of regular properties and methods and static properties and methods --

class User{

    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy")

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

console.log(User.userCount)


user1.sayHello()
user2.sayHello()
user3.sayHello()

User.getUserCount()