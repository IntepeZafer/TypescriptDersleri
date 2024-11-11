function count(S1, S2, S3) {
    if (S3 !== undefined) {
        return S1 + S2 + S3;
    }
    return S1 + S2;
}
console.log(count(1, 2));
var count2 = function (S1, S2, S3) {
    if (S3 !== undefined) {
        return S1 + S2 + S3;
    }
    return S1 + S2;
};
console.log(count2(1, 2));
