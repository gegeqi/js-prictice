var num = 1;

fn1(num);
console.log(num);

function fn1(aaa) {
    return aaa * 10;
}


var obj = new Object();
obj.name = "zhangsan";

fn2(obj);

console.log(obj);

function fn2(object) {
    object.name = "lisi";
}