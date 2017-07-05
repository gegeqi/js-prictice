function fn1(a,b) {
    // 输出实参
    console.log(arguments);
    // 伪数组可以修改值，不能修改长度
    console.log(arguments instanceof Array);

 // 输出整个函数
    console.log(arguments.callee);
}



fn1(1, 2);
fn1(1, 2, 3, 4);