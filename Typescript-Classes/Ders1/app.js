var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return Person;
}());
var person = new Person("Eren", 20);
console.log(person.getFullName());
