class Stack<T>{
    private items : T[] = [];
    constructor(private capacity : number){}
    isEmpty() : boolean{
        return this.items.length === 0;
    }
    push(item : T) : void{
        if(this.items.length === this.capacity){
            throw new Error('Stack is full!')
        }
        this.items.push(item);
    }
    pop() : T | undefined{
        return this.items.pop();
    }
}

function getRandomNumber(items : number[]):number{
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

const numberStack = new Stack<number>(10);
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());