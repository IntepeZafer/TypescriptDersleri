class Person {
    name : string;
    age : number;
   constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
   }
   getFullName(){
    return `${this.name} ${this.age}`;
   }
}

let person = new Person("Eren", 20);
console.log(person.getFullName());