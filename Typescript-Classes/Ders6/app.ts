abstract class Person{
    id : number;
    firstName : string;
    lastName : string
    jobTitle : string;
    constructor(id : number , firstName : string , lastName : string , jobTitle : string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle
    }
    abstract getFullName() : void;
}
class Employee extends Person{
    constructor(id : number , firstName : string , lastName : string , jobTitle : string){
        super(id , firstName , lastName , jobTitle)
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setFullName(fullName : string){
        const [firstName , lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const employee = new Employee(1 , "Eren" , "Yılmaz" , "Software Developer");
console.log(employee);
console.log(employee.getFullName());
employee.setFullName("Serkan Yılmaz");
console.log(employee);
