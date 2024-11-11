interface Employee{
    id : number;
    name : string;
    age : number;
}
let employee = <Employee>{};
employee.id = 1;
employee.name = "Eren";
employee.age = 20;
console.log(employee);