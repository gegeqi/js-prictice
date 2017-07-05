var arr = [11, 1, 2, 3, 13, 15];
console.log(arr.sort());

console.log(arr.sort(function (a,b) {
    return a-b;
}));

console.log(arr.sort(function (a,b) {
    return b-a;
}));