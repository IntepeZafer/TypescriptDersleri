function addName(name : string , sirName : string) : string;
function addName(name : number , sirName : number) : number;
function addName(name : string , sirName : string) : any{
    return name + " " + sirName;
} 

console.log(addName("Eren", "Yeager"));