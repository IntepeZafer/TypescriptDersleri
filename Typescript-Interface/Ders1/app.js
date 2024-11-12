var PersonOne = /** @class */ (function () {
    function PersonOne(id, firstName, lastName, jobTitle) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
    }
    PersonOne.prototype.sayHello = function (message) {
        return "".concat(message, " ").concat(this.firstName, " ").concat(this.lastName);
    };
    return PersonOne;
}());
var personOne = new PersonOne(1, "Eren", "Yılmaz", "Software Developer");
var personTwo = new PersonOne(2, "Mikasa", "Yılmaz", "Software Developer");
console.log(personOne.sayHello("Merhaba"));
console.log(personTwo.sayHello("Merhaba"));
