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