function count() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (number) {
        total += number;
    });
    return total;
}
console.log(count(1, 2, 3, 4, 5));
