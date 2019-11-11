/**
 * 1、放大镜的关键原理：鼠标在小图片上移动时，通过捕捉鼠标在小图片上的位置，定位大图片的位置。
 *
 * 2、放大镜特效设计
 *
 * a）、页面元素：缩略图、原图、视窗、放大镜
 * b）、技术点：事件捕获（onmouseover、onmouseout、onmousemove）、定位
 * c）、难点：计算
 * 

 * 
 *          缩略图(已知)            放大镜(已知)              放大镜移动的距离             放大镜可移动的最大距离
 * 倍率 = ——————————-----   =   ——————————------   =  ——————————————————————  =  ————————————————————————— => 原图移动的距离 = 放大镜移动的距离 * 原图的最大移动距离 / 放大镜的最大移动距离
 *           原图                   视窗(已知)             原图移动的距离（未知）           原图可移动的最大距离
 *
 *  倍率 = 缩略图/原图 = 放大镜/视窗 
 *  原图 = 缩略图x视窗/放大镜 = 视窗*倍率          
 */

//  1. 获取元素
let bigImg    = document.querySelector(".big-img");
let smallImg  = document.querySelector(".small-img");
let smallBox  = document.querySelector(".small-box");
let bigBox    = document.querySelector(".big-box");
let mirror    = document.querySelector(".mirror");
let container = document.querySelector(".container");
// 2. 根据比例关系计算大图尺寸
bigImg.style.width  = parseInt(getStyle(smallImg, "width")) * parseInt(getStyle(bigBox, "width")) / parseInt(getStyle(mirror, "width")) + "px";
bigImg.style.height = parseInt(getStyle(smallImg, "height")) * parseInt(getStyle(bigBox, "height")) / parseInt(getStyle(mirror, "height")) + "px";
// 3. 事件监听
// 3.1. 鼠标移入缩略图：显示放大镜和视窗
smallBox.onmouseenter = function() {
    mirror.style.display = "block";
    bigBox.style.display = "block";
}
// 3.2. 鼠标移出缩略图：隐藏放大镜和视窗
smallBox.onmouseleave = function() {
    mirror.style.display = "none";
    bigBox.style.display = "none";
}
// 3.3. 监听鼠标在缩略图中移动
smallBox.onmousemove = function(event) {
    // 4. 计算放大镜的位置
    let _top  = event.clientY - container.offsetTop - smallBox.offsetTop - mirror.offsetHeight / 2;
    let _left = event.clientX - container.offsetLeft - smallBox.offsetLeft - mirror.offsetWidth / 2;;
    // 5. 处理边界值
    // 5.1. 计算放大镜可移动的最大距离
    let maxY = smallImg.offsetHeight - mirror.offsetHeight;
    let maxX = smallImg.offsetWidth - mirror.offsetWidth;
    // 5.2. 垂直方向
    if(_top < 0) {
        _top = 0;
    }else if(_top > maxY) {
        _top = maxY;
    }
    // 5.3. 水平方向
    if(_left < 0) {
        _left = 0;
    }else if(_left > maxX) {
        _left = maxX;
    }
    // 6. 更新放大镜的位置
    mirror.style.top  = _top  + "px";
    mirror.style.left = _left + "px";
    // 7. 更新原图的位置
    // 原图移动的距离 = 放大镜移动的距离 * 原图的最大移动距离 / 放大镜的最大移动距离
    bigImg.style.left = -(_left * (bigImg.offsetWidth - bigBox.offsetWidth) / maxX) + "px";
    bigImg.style.top  = -(_top  * (bigImg.offsetHeight - bigBox.offsetHeight) / maxY) + "px";
}
 




