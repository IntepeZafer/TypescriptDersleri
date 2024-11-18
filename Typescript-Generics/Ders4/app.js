var Stack = /** @class */ (function () {
    function Stack(capacity) {
        this.capacity = capacity;
        this.items = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.push = function (item) {
        if (this.items.length === this.capacity) {
            throw new Error('Stack is full!');
        }
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numberStack = new Stack(10);
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
