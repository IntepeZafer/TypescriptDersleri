var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    return Person;
}());
var person = new Person("Eren", 20, true);
console.log(person);
