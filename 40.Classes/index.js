// classes = (ES6 feature ) provides a more structured and cleaner way to 
//           work with object compared to traditinal constructor functtions
//           ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);  // round to two decimal 
                                                         // points
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax); 
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);


// product2.displayProduct();

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);


product2.displayProduct();

const total1 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);

