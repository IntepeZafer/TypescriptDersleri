var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi);
console.log(Circle.calculateArea(5));
var circle = new Circle();
console.log(circle.pi);
