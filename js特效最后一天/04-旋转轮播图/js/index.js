window.onload = function () {
    //需求：点击现有按钮，实现旋转木马
    //原理：点击右侧按钮，3号盒子的样式赋值给2号盒子，以此类推
    //左侧同理
    //步骤:
    //1.鼠标放到轮播图上，两侧按钮显示，打开隐藏
    //2.让页面加载出所有样式
    //3.把两侧按钮绑定事件，（调用同一个方法，只有一个参数，true为正向旋转，false为反向）
    //4.书写函数。（操作数组，正向旋转：删除第一个样式，添加到最后）
    //反向旋转（删除最后一个样式，添加到第一个）

    var json = [
        {   //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            z: 2
        },
        {  // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 80,
            z: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            z: 4
        },
        {  // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 80,
            z: 3
        },
        {   //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            z: 2
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
        // arrow.style.opacity = 1;
        animate(arrow, {"opacity": 100});
    }

    slide.onmouseleave = function () {
        // arrow.style.opacity = 1;
        animate(arrow, {"opacity": 0});
    }

    //让页面加载出所有盒子的样式
    // for (var i = 0; i < liArr.length; i++) {
    //     //利用animate让指定属性缓慢运行到指定位置
    //     animate(liArr[i], {
    //         "width": json[i].width,
    //         "top": json[i].top,
    //         "left": json[i].left,
    //         "opacity": json[i].opacity,
    //         "zIndex": json[i].z
    //     });
    // }

    move();

    //3.把两侧按钮绑定事件，（调用同一个方法，只有一个参数，true为正向旋转，false为反向）
    //利用for in绑定事件
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
        if (bool !== undefined) {
            if (bool) {
                //反向旋转（删除最后一个元素，添加到第一个）
                // var ele = json.pop();
                // json.unshift(ele);

                json.unshift(json.pop());

            } else {
                //4.书写函数。（操作数组，正向旋转：删除第一个元素，添加到最后）
                // var ele = json.shift();
                // json.push(ele);

                json.push(json.shift());

            }
        }

        for (var i = 0; i < liArr.length; i++) {
            //利用animate让指定属性缓慢运行到指定位置
            animate(liArr[i], {
                "width": json[i].width,
                "top": json[i].top,
                "left": json[i].left,
                "opacity": json[i].opacity,
                "zIndex": json[i].z
            },function () {
                flag = true;
            });
        }
    }

}

