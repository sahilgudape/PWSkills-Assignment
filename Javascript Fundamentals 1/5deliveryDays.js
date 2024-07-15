let A = 'Standard';
let B = 'Express';
let C = 'Overnight';
let deliveryDays;

switch(B){
    case A:
        deliveryDays = 'Delivery will be done in 3-5 days.'
        break;
    case B:
        deliveryDays = 'Delivery will be done in 1-2 days.'
        break;
    case C:
        deliveryDays = 'Product will be delivered next day.'
}

console.log(deliveryDays);