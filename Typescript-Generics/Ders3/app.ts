interface Months<T>{
    key : T;
    value : T;
}
let months : Months<string> = {
    key : "January",
    value : "January"
}
console.log(months);
interface Months2<T>{
    add(o : T) : void;
    remove(o : T) : void;
}

class List<T> implements Months2<T>{
    add(o : T) : void{
        console.log(o);
    }
    remove(o : T) : void{
        console.log(o);
    }
}

let list = new List<string>();
list.add("Eren");
list.remove("Eren");
