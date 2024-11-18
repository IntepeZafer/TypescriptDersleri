var months = {
    key: "January",
    value: "January"
};
console.log(months);
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.add = function (o) {
        console.log(o);
    };
    List.prototype.remove = function (o) {
        console.log(o);
    };
    return List;
}());
var list = new List();
list.add("Eren");
list.remove("Eren");
