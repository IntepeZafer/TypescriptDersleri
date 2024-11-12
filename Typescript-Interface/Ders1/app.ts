interface Person{
    id:number;
    firstName : string;
    lastName : string;
    jobTitle : string;
    sayHello(message : string) : string;
}
class PersonOne implements Person{
    id : number;
    firstName : string;
    lastName : string;
    jobTitle : string;
    constructor(id : number , firstName : string , lastName : string , jobTitle : string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle
    }
    sayHello(message: string): string {
        return `${message} ${this.firstName} ${this.lastName}`
    }
}
let personOne = new PersonOne(1 , "Eren" , "Yılmaz" , "Software Developer");
let personTwo = new PersonOne(2 , "Mikasa" , "Yılmaz" , "Software Developer");
console.log(personOne.sayHello("Merhaba"));
console.log(personTwo.sayHello("Merhaba"));