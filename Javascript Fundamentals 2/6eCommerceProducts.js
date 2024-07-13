const productDetails = {
    name: "Apple MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

console.log('Below are the product details.');
for (let key of Object.keys(productDetails)) {
    console.log(`${key}: ${productDetails[key]}`);
}