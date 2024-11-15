interface IPerson{
    firstName : string;
    lastName : string;
    age : number;
    isMarried : boolean;
    children : string[];
    address : {city : string;country : string;}
    city : string;
    country : string;
    personInfo(firstName : string , lastName : string , age : number , isMarried : boolean , children : string[] , city : string , country : string)
}
interface IEmployee extends IPerson{
    id : number;
}
let newEmployee : IEmployee = {
    id : 1,
    firstName : "Eren",
    lastName : "Yılmaz",
    age : 30,
    isMarried : true,
    children : ["Ali" , "Ayşe"],
    address : {city : "Istanbul" , country : "Turkey"},
    city : "Istanbul",
    country : "Turkey",
    personInfo(firstName : string , lastName : string , age : number , isMarried : boolean , children : string[] , city : string , country : string) {}
};

interface Cumstomer{
    id : number;
    firstName : string;
    lastName : string;
    age : number;
    isMarried : boolean;
    children : string[];
    address : {city : string;country : string;}
    city : string;
    country : string;
    personInfo(firstName : string , lastName : string , age : number , isMarried : boolean , children : string[] , city : string , country : string);
}
class newCumtomer implements Cumstomer{
    id : number;
    firstName : string;
    lastName : string;
    age : number;
    isMarried : boolean;
    children : string[];
    address : {city : string;country : string;}
    city : string;
    country : string;
    constructor(id : number , firstName : string , lastName : string , age : number , isMarried : boolean , children : string[] , city : string , country : string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.children = children;
        this.address = { city: city, country: country };
    }
    personInfo(firstName : string , lastName : string , age : number , isMarried : boolean , children : string[] , city : string , country : string) {
        console.log(`Adı: ${firstName}, Soyadı: ${lastName}, Yaşı: ${age}, Medeni Hali: ${isMarried ? "Evli" : "Bekar"}, Çocuk Sayısı: ${children.length}, Şehir: ${city}, Ülke: ${country}`);
    }
}
