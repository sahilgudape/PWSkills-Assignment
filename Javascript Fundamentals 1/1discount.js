let totalValue = 2000;
let discountPercentage = 20;

function finalPrice(){
    const discountPrice = ((discountPercentage/100)*totalValue);
    const finalDiscountPrice = totalValue - discountPrice;
    console.log('The final price after the discount is: Rs.' +finalDiscountPrice);
}

finalPrice();