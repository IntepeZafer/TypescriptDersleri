var PersonOne = /** @class */ (function () {
    function PersonOne(id, firstName, lastName, age, isMarried, children, city, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.children = children;
        this.address = { city: city, country: country };
    }
    PersonOne.prototype.personInfo = function (firstName, lastName, age, isMarried, children, city, country) {
        if (person.firstName, person.lastName, person.age, person.isMarried, person.children, person.address.city, person.address.country) {
            console.log("Ad\u0131: ".concat(firstName, ", Soyad\u0131: ").concat(lastName, ", Ya\u015F\u0131: ").concat(age, ", Medeni Hali: ").concat(isMarried ? "Evli" : "Bekar", ", \u00C7ocuk Say\u0131s\u0131: ").concat(children.length, ", \u015Eehir: ").concat(city, ", \u00DClke: ").concat(country));
        }
        else {
            console.log("Bilgiler eksik");
        }
    };
    return PersonOne;
}());
var person = new PersonOne(1, "Eren", "Yılmaz", 30, true, ["Ali", "Ayşe"], "İstanbul", "Türkiye");
person.personInfo(person.firstName, person.lastName, person.age, person.isMarried, person.children, person.address.city, person.address.country);
var setPerson = {
    firstName: "Eren",
    lastName: "Yılmaz",
};
setPerson.firstName = "Zafer";
console.log(setPerson.firstName);
var format;
format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLowerCase;
};
console.log(format("Zafer", true));
