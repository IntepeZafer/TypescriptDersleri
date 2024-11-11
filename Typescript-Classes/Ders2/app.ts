class Person {
    public name : string;
    private age : number;
    protected isStudent : boolean;
   constructor(name: string, age: number , isStudent : boolean) {
       this.name = name;
       this.age = age;
       this.isStudent = isStudent
   }
}

let person = new Person("Eren", 20 , true);
console.log(person);
