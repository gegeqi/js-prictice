// var arr = [1, 2, 3, 1000, 2000, 3000, 4000];

/*ar arr1 = arr.filter(function (a) {
    return a < 100;
});

console.log(arr1);*/


/*arr2 = [1, 2, 3, 4, 5, 1, 2];

var obj = {};
console.log(obj);

for (var i = 0;i<arr2.length;i++){
    if(obj[arr2[i]]){
        obj[arr2[i]] += 1;
    }else {
        obj[arr2[i]] = 1;
    }
}

console.log(obj);*/

var arr3 = [1, 2, 3, 4, 3, 2, 1];
var newArray = [];

function fn(array) {
    var newArray = [];
    for (var i = 0;i<array.length;i++){
        var bool = true;
        for(var k = 0;k<newArray.length;k++){
            if(newArray[k] === array[i]){
                bool = false;
            }
        }
        if(bool){
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(fn(arr3));
