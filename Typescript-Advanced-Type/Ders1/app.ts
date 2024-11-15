interface BusinessPerson{
    id : number,
    name : string,
    age : number,
    company : string,
    jobTitle : string,
    salary : number,
}
interface Indentity{
    id : number,
    name : string,
    age : number,
    company : string,
    jobTitle : string,
    salary : number,
    address : {city : string;country : string;}
}
interface Contact{
    id : number,
    name : string,
    age : number,
    company : string,
    jobTitle : string,
    salary : number,
    address : {city : string;country : string;},
    phone : string,
    email : string
}
type Person = BusinessPerson & Indentity & Contact;
let PersonOne : Person = {
    id : 1,
    name : "Eren",
    age : 20,
    company : "Kocaeli Üniversitesi",
    jobTitle : "Öğrenci",
    salary : 1500,
    address : {city : "Kocaeli",country : "Turkey"},
    phone : "0555 555 55 55",
    email : "M0xYd@example.com"
}

console.log(PersonOne);