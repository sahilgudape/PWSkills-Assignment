const car = {
    make: 'Koenigsegg',
    model: 'Gemera',
    year: '2024'
}

function carProperties(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);
    }
}

carProperties(car);