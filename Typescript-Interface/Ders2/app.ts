interface Person {
    id?: number;
    readonly firstName?: string;
    lastName?: string;
    age?: number;
    isMarried?: boolean;
    children?: string[];
    address?: {city?: string;country?: string;};
    personInfo(firstName: string, lastName: string, age: number, isMarried: boolean, children: string[], city: string, country: string): void;
}

class PersonOne implements Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    isMarried: boolean;
    children: string[];
    address: { city: string; country: string; };

    constructor(id: number, firstName: string, lastName: string, age: number, isMarried: boolean, children: string[], city: string, country: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.children = children;
        this.address = { city: city, country: country };
    }

    personInfo(firstName: string, lastName: string, age: number, isMarried: boolean, children: string[], city: string, country: string): void {
        if(person.firstName , person.lastName , person.age , person.isMarried , person.children , person.address.city , person.address.country){
            console.log(`Adı: ${firstName}, Soyadı: ${lastName}, Yaşı: ${age}, Medeni Hali: ${isMarried ? "Evli" : "Bekar"}, Çocuk Sayısı: ${children.length}, Şehir: ${city}, Ülke: ${country}`);
        }else{
            console.log("Bilgiler eksik");
        }
    }
}
let person = new PersonOne(1, "Eren", "Yılmaz", 30, true, ["Ali", "Ayşe"], "İstanbul", "Türkiye");
person.personInfo(person.firstName, person.lastName, person.age, person.isMarried, person.children, person.address.city, person.address.country);

let setPerson : Person = {
    firstName : "Eren",
    lastName : "Yılmaz",
}
setPerson.firstName = "Zafer";
console.log(setPerson.firstName)


interface StringFormat{
    (str: string , isUpper : boolean): string;
}
let format : StringFormat;
format = function(str : string , isUpper : boolean){
    return isUpper ? str.toUpperCase() : str.toLowerCase; 
}
console.log(format("Zafer" , true));