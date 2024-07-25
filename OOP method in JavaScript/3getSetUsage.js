class temperature{
    constructor(){
        this.celsius = 0;
        this.farenheit = 32;
    }

    get getCelsius(){
        return this.celsius;
    }

    set setCelsius(value){
        if (typeof value === 'number'){
            this.celsius = value;
            this.farenheit = (value*9/5)+32;
        } else {
            console.log('entered value is not supported. please enter number');
        }
    }

    get getfarenheit(){
        return this.farenheit;
    }

    set setfarenheit(value) {
        if (typeof value === 'number') {
            this.farenheit = value;
            this.celsius = (value-32)*5/9;
        }
    }
}

const Temperature = new temperature();

console.log(`Initial celsius: ${Temperature.getCelsius}`);
console.log(`Initial farenheit: ${Temperature.getfarenheit}`);

Temperature.setCelsius = 25;
console.log(`temperature in celsius: ${Temperature.getCelsius}`);
console.log(`temperature in farnheit: ${Temperature.getfarenheit}`);

Temperature.setfarenheit = 98;
console.log(`temperature in celsius: ${Temperature.getCelsius}`);
console.log(`temperature in farenheit: ${Temperature.getfarenheit}`);