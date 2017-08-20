window.onload = function () {
    var arr = [
        {   //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            zIndex: 2
        },
        {  // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 80,
            zIndex: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            zIndex: 4
        },
        {  // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 80,
            zIndex: 3
        },
        {   //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            zIndex: 2
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = document.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var arrowChild = arrow.children;
    //开闭原则，节流
    var flag = true;


    slide.onmouseenter = function () {
        animate(arrow, {"opacity": 100});
    }

    slide.onmouseleave = function () {
        animate(arrow, {"opacity": 0});
    }

    move();

    for (var k in arrowChild) {
        arrowChild[k].onclick = function () {
            if (this.className === "prev") {
                if (flag === true) {
                    flag = false;
                    move(true);
                }

            } else {
                if (flag === true) {
                    flag = false;
                    move(false);
                }
            }
        }
    }


    function move(bool) {
        if (bool === true || bool === false) {
            if (bool) {
                arr.unshift(arr.pop());
            } else {
                arr.push(arr.shift());
            }
        }
        for (var i = 0; i < liArr.length; i++) {
            animate(liArr[i], arr[i], function () {
                flag = true;
            });
        }
    }

}

