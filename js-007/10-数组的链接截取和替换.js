var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 4];
arr3 = arr1.concat(arr2)
console.log(arr1);
console.log(arr2);
console.log(arr3);


// 数组的截取
var arr4 = arr3.slice(2,4);
console.log(arr3);
console.log(arr4);


var arr5 = arr3.splice(2,3,"j","k","l");
console.log(arr3);
console.log(arr5);

