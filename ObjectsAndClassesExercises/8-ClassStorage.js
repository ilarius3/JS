class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];  
    }
    get totalCost() {
        return this.storage.reduce((acc, el) => 
        {return acc+el.price*el.quantity}, 0);
    } //1.5*15 + 0.9*25 + 1.1*8 = 53.8
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }   //15 + 25 + 8 = 48; 50 - 48 = 2;
    getProducts(){
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        }) 
        return output.join('\n');
    }
}
let productOne = {name: 'Cucamber',
price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato',
price: 0.90, quantity: 25};
let productThree = {name: 'Bread',
price: 1.10, quantity: 8};
let storage = new Storage(50);      
storage.addProduct(productOne);    
storage.addProduct(productTwo);     
storage.addProduct(productThree);  
console.log(storage.getProducts()); 
console.log(storage.capacity);
console.log(storage.totalCost);
