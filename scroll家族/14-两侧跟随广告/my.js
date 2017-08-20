function scroll() {
    var json = {};
    //如果这个属性存在，难么返回值是0-无穷大
    //不存在，返回undefined
    if (window.pageYOffset) {
        json = {
            "top": window.pageYOffset,
            "left": window.pageXOffset
        };
    } else if (document.compatMode === "CSS1Compat") {
        json = {
            "top": document.documentElement.scrollTop,
            "left": document.documentElement.scrollLeft
        };
    } else {
        json = {
            "top": document.body.scrollTop,
            "left": document.body.scrollLeft
        }
    }

    return json;

    //简单封装（工作使用）
//        return {
//            "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
//            "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
//        }
}

function animate(ele, target) {
    clearInterval(ele.timer);

    ele.timer = setInterval(function () {
        //获取步长
        var step = (target - ele.offsetTop) / 10;

        //小于0向下取整，大于0向上取整

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        ele.style.top = ele.offsetTop + step + "px";

        if (Math.abs(target - ele.offsetTop) < Math.abs(step)) {
            //处理小数
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 25);
}