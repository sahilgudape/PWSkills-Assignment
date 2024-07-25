class Shape{
    constructor(){
        this.type = 'Shape';
    }

    calculateArea(){
        return 'Area calculation not implemented for this shape.'
    }

    calculatePerimeter(){
        return 'Perimeter calculataion not implemented for this shape.'
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.type = 'circle'
        this.radius = radius;
    }

    calculateArea(){
        return Math.PI*this.radius*this.radius;
    }

    calculatePerimeter(){
        return 2*Math.PI*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(length, breadth){
        super();
        this.type = 'rectangle';
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea() {
        return this.length*this.breadth;
    }

    calculatePerimeter(){
        return 2*(this.breadth*this.length);
    }
}

class Triangle extends Shape{
    constructor (base,height,side1,side2){
        super();
        this.type = 'triangle';
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }

    calculateArea(){
        return 0.5*this.base*this.height;
    }

    calculatePerimeter(){
        return this.side1+this.base+this.side2;
    }
}

const circle = new Circle(5);
console.log(`Area of Circle is ${circle.calculateArea()} and Perimeter of the circle is ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(3,4);
console.log(`Area of rectangle is ${rectangle.calculateArea()} and Perimeter of the rectangle is ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(3,5,7,9);
console.log(`Area of triangle is ${triangle.calculateArea()} and Perimeter of triangle is ${triangle.calculatePerimeter()}`);