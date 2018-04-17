/**
 * Created by LiHongyao on 2017/8/31.
 */
// 1、获取dom元素
var oWrap   = document.querySelector('.wrap');
var oImgBox = document.querySelector('.imgBox');
var oPreBtn = document.querySelector('.prev');
var oNexBtn = document.querySelector('.next');
var oIdots  = document.querySelectorAll('.idot');

var curImgIdx = 1;
var isAnimating = false; // 记录帧动画状态
var timer = null; // 自动轮播定时器

play();

// 2、事件添加
// 点击上一张
oPreBtn.onclick = function () {
    if(isAnimating) {
        // 终止执行
        return;
    }
    if(curImgIdx == 1) {
        curImgIdx = 6
    }else {
        curImgIdx--;
    }
    tab(520);
    updateIdots();
}
// 点击下一张
oNexBtn.onclick = function () {
    if(isAnimating) {
        // 终止执行
        return;
    }
    if(curImgIdx == 6) {
        curImgIdx = 1
    }else {
        curImgIdx++;
    }
    tab(-520);
    updateIdots();
}
// 循环为小圆点添加点击事件
for(var i = 0; i < oIdots.length; i++) {
    // 为小圆点对象添加自定义属性
    oIdots[i].idx = i + 1;
    oIdots[i].onclick = function () {
        if(isAnimating) {
            // 终止执行
            return;
        }
        if(this.idx != curImgIdx) {
            //  offset = -(target - curImgIdx) * 520
            var offset = -(this.idx - curImgIdx) * 520;

            tab(offset);
            curImgIdx = this.idx;
            updateIdots();
        }
    }
}

oWrap.onmouseenter = stop;
oWrap.onmouseleave   = play;

/**
 * 3、函数封装
 */

function tab(offset) {
    isAnimating = true;
    // 帧动画
    var duration = 500, // 持续时间
        interval = 15,  // 每一帧执行多长时间
        frames   = duration / interval, // 帧数
        move     = Math.ceil(offset / frames); // 每一帧移动的距离

    // 定时器启动帧动画
    var curLeft = parseInt(getStyle(oImgBox, 'left'));
    var desLeft = curLeft + offset;
    var t = setInterval(function () {
        if((offset < 0 && curLeft > desLeft) || (offset > 0 && curLeft < desLeft)) {
            oImgBox.style.left = curLeft + move + 'px';
            // 更新当前left值
            curLeft = parseInt(getStyle(oImgBox, 'left'));
        }else {
            // 停止帧动画
            clearInterval(t);
            isAnimating = false;
            // 更新left值
            oImgBox.style.left = desLeft + 'px';
            // 无限滚动
            curLeft = parseInt(getStyle(oImgBox, 'left'));
            if(curLeft < -3120) {
                oImgBox.style.left = '-520px';
            }else if(curLeft > -520) {
                oImgBox.style.left = '-3120px';
            }
        }
    }, interval);
}

function updateIdots() {
    // 清除上一次的class
    for(var i = 0; i < oIdots.length; i++) {
        if(oIdots[i].classList.contains('active')) {
            oIdots[i].classList.remove('active');
            break; // 终止循环
        }
    }
    // 添加class
    oIdots[curImgIdx - 1].classList.add('active');
}

function getStyle(obj, attr) {
    // 兼容IE
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj, null)[attr];
    }
}


function play() {
    timer = setInterval(function () {
        oNexBtn.onclick();
    }, 3000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}





















































