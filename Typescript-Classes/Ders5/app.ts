class Circle{
    static pi : number = 3.14;
    radius : number;
    pi = 3;
    static calculateArea(radius : number){
        return this.pi * radius * radius
    }
}
console.log(Circle.pi);
console.log(Circle.calculateArea(5));
const circle = new Circle();
console.log(circle.pi);