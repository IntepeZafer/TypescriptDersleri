function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Yanlış veri tipi");
}
console.log(add("Eren", "Yılmaz"));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isShortListAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isShortList = function () {
        return true;
    };
    return Supplier;
}());
var BusinessCustomerImpl = /** @class */ (function () {
    function BusinessCustomerImpl() {
    }
    BusinessCustomerImpl.prototype.isShortListAllowed = function () {
        return true;
    };
    BusinessCustomerImpl.prototype.isShortList = function () {
        return false; // Örnek veri.
    };
    return BusinessCustomerImpl;
}());
function signContract(customer) {
    var message = "";
    if (customer.isShortListAllowed()) {
        message += "Müşteri listesinde. ";
    }
    else {
        message += "Müşteri listesinde değil. ";
    }
    // Supplier özelliklerini kontrol et
    if (customer.isShortList()) {
        message += "Satıcı listesinde.";
    }
    else {
        message += "Satıcı listesinde değil.";
    }
    return message;
}
var customer = new BusinessCustomerImpl();
console.log(signContract(customer));
