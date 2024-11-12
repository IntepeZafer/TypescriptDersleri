class Person{
    id : number;
    firstName : string;
    lastName : string;
    constructor(id : number , firstName : string , lastName : string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    jobTitle : string;
    constructor(id : number , firstName : string , lastName : string , jobTitle : string){
        super(id , firstName , lastName);
        this.jobTitle = jobTitle
    }
}

let employee = new Employee(1 , "Eren" , "Yılmaz" , "Software Developer");
console.log(employee);
console.log(employee.getFullName());