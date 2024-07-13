const products = [
    {name: 'Laptop', price: 120000},
    {name: 'Mobile', price: 70000},
    {name: 'Watch', price: 20000},
    {name: 'Laptop Bag', price: 2000},
    {name: 'Mobile Charger', price: 1500},
]

let maxProduct = {name: '', price: 0};
let minProduct = {name: '', price: Number.MAX_VALUE};

for(let product of products){
    if (product.price>maxProduct.price){
        maxProduct = product;
    }
    if (product.price<minProduct.price) {
        minProduct = product;
    }
}
console.log(`The product with maximum amount is ${maxProduct.name} and the price of that product is ${maxProduct.price}`);
console.log(`The product with minimum amount is ${minProduct.name} and the price of that product is ${minProduct.price}`);