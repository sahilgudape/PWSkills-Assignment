const items = [
    {
        product: 'Android TV',
        category: 'Television',
        price: 499,
    },

    {
        product: 'Audi A8',
        category: 'Car',
        price: 91999
    },

    {
        product: 'Samsung S23U',
        category: 'Smartphone',
        price: 1499,
    },
]

const INRperUSD = 83.50;

priceINR = (priceUSD) => {
    return priceUSD*INRperUSD;
}

const priceInINR = items.map ((item) =>(
    {
        ...item,
        inINR: priceINR(item.price),
    }
))

console.log(priceInINR);