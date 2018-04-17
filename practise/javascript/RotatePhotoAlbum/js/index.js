
{

    /**
     * 1.摊牌效果
     */
    let oImgWrap = document.querySelector("#wrap");
    let oImgs    = document.querySelectorAll("#wrap > img");
    let leng     = oImgs.length;
    let deg      = 360 / leng;

    for(let i = 0; i < leng; i++) {
        oImgs[i].style.transform = `rotateY(${deg * i}deg) translateZ(250px)`;
        oImgs[leng - i - 1].style.transition = `all 1s linear ${.2 * i}s`;
    }

    /**
     * 2、旋转效果
     */
    // 点击坐标
    let clickX, clickY;
    // 移动坐标
    let moveX, moveY;
    // 移动距离
    let minusX, minusY;
    // 旋转角度
    let rotateX =  0,
        rotateY = -20; // 由于让 X 默认偏移-20deg，因此在设置默认值的时候应该赋值为-20；
    // 定时器
    let timer = null;
    // 鼠标按下事件
    window.onmousedown = function (e) {
        // 兼容IE
        e = e || event;
        // 更新鼠标位置
        clickX = e.clientX;
        clickY = e.clientY;

        // 鼠标移动事件
        this.onmousemove = function (e) {
            e = e || event;
            // 更新鼠标移动的位置
            moveX = e.clientX;
            moveY = e.clientY;
            // 更新鼠标移动的距离
            minusX = moveX - clickX;
            minusY = moveY - clickY;
            // 旋转角度，避免旋转太快，故 *0.
            rotateX += minusX * 0.1;
            rotateY -= minusY * 0.1;
            // 中心物体旋转
            oImgWrap.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
            // 更新鼠标位置
            clickX = moveX;
            clickY = moveY;
        }

        // 鼠标释放
        this.onmouseup = function () {
            // 清除鼠标移动事件
            this.onmousemove = null;
            // 旋转惯性
            timer = setInterval(function () {
                minusX *= 0.99;
                minusY *= 0.99;
                rotateX += minusX * 0.1;
                rotateY -= minusY * 0.1;
                oImgWrap.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
                if(Math.abs(minusX) < 0.1 && Math.abs(minusY) < 0.1) {
                    // 清除定时器
                    clearInterval(timer);
                }
            }, 10);
        }
    }
}





