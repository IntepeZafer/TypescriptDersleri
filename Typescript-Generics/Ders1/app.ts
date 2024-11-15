function getRandomNumber(items : number[]):number{
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [1,2,3,4,5];
console.log(getRandomNumber(numbers));

function getRandomString<StringData>(items : StringData[]):string{
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let strings = ["Eren" , "Mikasa" , "Armin"];
console.log(getRandomString<string>(strings));