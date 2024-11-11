function count(S1 : number , S2 : number , S3? : number) : number{
    if(S3 !== undefined){
        return S1 + S2 + S3;
    }
    return S1 + S2;
}
console.log(count(1,2));

const count2 = (S1 : number , S2 : number , S3? : number) : number => {
    if(S3 !== undefined){
        return S1 + S2 + S3;
    }
    return S1 + S2;
};
console.log(count2(1,2));