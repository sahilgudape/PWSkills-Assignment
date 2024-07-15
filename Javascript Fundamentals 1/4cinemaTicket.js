let numberOfChildren = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

const priceForChildren = 100;
const priceForAdults = 150;
const priceForSeniors = 120;

let totalPrice = (numberOfChildren*priceForChildren)+(numberOfAdults*priceForAdults)+(numberOfSeniors*priceForSeniors);

console.log(`Total ticket price is ${totalPrice}`);