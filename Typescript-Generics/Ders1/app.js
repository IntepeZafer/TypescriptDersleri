function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 2, 3, 4, 5];
console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var strings = ["Eren", "Mikasa", "Armin"];
console.log(getRandomString(strings));
