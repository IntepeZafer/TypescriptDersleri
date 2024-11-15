type tip = string | number;
function add(a : tip , b : tip){
    if(typeof a === "string" && typeof b === "string"){
        return a.concat(b);
    }
    else if(typeof a === "number" && typeof b === "number"){
        return a + b
    }
    throw new Error("Yanlış veri tipi");
}
console.log(add("Eren" , "Yılmaz"));

class Customer{
    isShortListAllowed() : boolean{
        return true;
    }
}
class Supplier{
    isShortList() : boolean{
        return true;
    }
}
type BusinessCustomer = Customer & Supplier;

class BusinessCustomerImpl implements BusinessCustomer {
    isShortListAllowed(): boolean {
        return true;
    }

    isShortList(): boolean {
        return false; // Örnek veri.
    }
}

function signContract(customer: BusinessCustomer): string {
    let message: string = "";
    if (customer.isShortListAllowed()) {
        message += "Müşteri listesinde. ";
    } else {
        message += "Müşteri listesinde değil. ";
    }

    // Supplier özelliklerini kontrol et
    if (customer.isShortList()) {
        message += "Satıcı listesinde.";
    } else {
        message += "Satıcı listesinde değil.";
    }

    return message;
}

const customer = new BusinessCustomerImpl();
console.log(signContract(customer));