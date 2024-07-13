function calculateCartValue() {
    let totalvalue = 0;
    for (let i=0; i<arguments.length;i++){
        totalvalue += arguments[i];
    }
    console.log(`The total cart value is ${totalvalue}`);
    return totalvalue;
}

calculateCartValue(125,25,35);