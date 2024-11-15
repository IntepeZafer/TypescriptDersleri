var newEmployee = {
    id: 1,
    firstName: "Eren",
    lastName: "Yılmaz",
    age: 30,
    isMarried: true,
    children: ["Ali", "Ayşe"],
    address: { city: "Istanbul", country: "Turkey" },
    city: "Istanbul",
    country: "Turkey",
    personInfo: function (firstName, lastName, age, isMarried, children, city, country) { }
};
var newCumtomer = /** @class */ (function () {
    function newCumtomer(id, firstName, lastName, age, isMarried, children, city, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.children = children;
        this.address = { city: city, country: country };
    }
    newCumtomer.prototype.personInfo = function (firstName, lastName, age, isMarried, children, city, country) {
        console.log("Ad\u0131: ".concat(firstName, ", Soyad\u0131: ").concat(lastName, ", Ya\u015F\u0131: ").concat(age, ", Medeni Hali: ").concat(isMarried ? "Evli" : "Bekar", ", \u00C7ocuk Say\u0131s\u0131: ").concat(children.length, ", \u015Eehir: ").concat(city, ", \u00DClke: ").concat(country));
    };
    return newCumtomer;
}());
