function merge<u extends object,v extends object>(obj1:u,obj:v){
    return {
        ...obj1,
        ...obj
    }
}
let person = merge({name:"Eren"},{age:20});
console.log(person);