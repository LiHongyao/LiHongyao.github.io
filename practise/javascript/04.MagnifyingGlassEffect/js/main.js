/**
 * 1、放大镜的关键原理：
 *
 * a）、鼠标在小图片上移动时，通过捕捉鼠标在小图片上的位置，定位大图片的相应位置。
 *
 *
 * 2、放大镜特效设计
 *
 * a）、页面元素
 * b）、技术点：事件捕获（onmouseover、onmouseout、onmousemove）、定位
 * c）、难点：计算
 *
 *  小图片宽            放大镜宽             放大镜移动的距离            放大镜可移动的最大距离
 * ——————————   =  ——————————————   =  ——————————————————————  =  ————————————————————————— => 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
 *  大图片宽           大图片局部宽          大图移动的距离（未知）        大图片可移动的最大距离
 *
 *  关于图片的比例问   题
 *  也可以这样做：
 *  大图的宽 / 小图的宽 = 大图的移动距离 / 小图的移动距离
 */

{
    // 获取元素
    let objContainer     = $.get("#container"),
        objSmallBox      = $.get("#small-box"),
        objSmallboxGlass = $.get("#glass"),
        objSmallboxImg   = $.get("#small-img"),
        objBigBox        = $.get("#big-box"),
        objBigBoxImage   = $.get("#big-img");

    // 更新大图片的值
    let w = objSmallboxImg.offsetWidth  * parseInt($.getStyle(objBigBox, "width"))  / parseInt($.getStyle(objSmallboxGlass, "width")),
        h = objSmallboxImg.offsetHeight * parseInt($.getStyle(objBigBox, "height")) / parseInt($.getStyle(objSmallboxGlass, "height"));
    objBigBoxImage.style.cssText = `width:${w}px; height:${h}px`;


    // 当鼠标移入小图时显示放大镜和大图
    $.addEvent(objSmallBox, "mouseover", function () {
        objSmallboxGlass.style.display = "block";
        objBigBox.style.display = "block";
    });

    // 当鼠标移出小图时隐藏放大镜和大图
    $.addEvent(objSmallBox, "mouseout", function () {
        objSmallboxGlass.style.display = "none";
        objBigBox.style.display = "none";
    });
    // 当鼠标在小图上移动时
    $.addEvent(objSmallBox, "mousemove", function (e) {
        e = e || event;
        // 计算放大镜在容器中的位置
        let left = e.clientX - objContainer.offsetLeft - objSmallBox.offsetLeft - objSmallboxGlass.offsetWidth / 2;
        let top = e.clientY - objContainer.offsetTop - objSmallBox.offsetTop - objSmallboxGlass.offsetHeight / 2;

        // 异常处理
        if (left < 0) {
            // 滑到最左边
            left = 0;
        } else if (left > (objSmallBox.offsetWidth - objSmallboxGlass.offsetWidth)) {
            // 滑到最右边
            left = objSmallBox.offsetWidth - objSmallboxGlass.offsetWidth;
        }
        if (top < 0) {
            // 滑到最顶部
            top = 0;
        } else if (top > (objSmallBox.offsetHeight - objSmallboxGlass.offsetHeight)) {
            // 滑到最底部
            top = objSmallBox.offsetHeight - objSmallboxGlass.offsetHeight;

        }

        // 设置放大镜位置
        objSmallboxGlass.style.left = left + "px";
        objSmallboxGlass.style.top = top + "px";

        // 设置大图片位置
        // 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
        objBigBoxImage.style.left = -left * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) / (objSmallBox.offsetWidth - objSmallboxGlass.offsetWidth) + "px";
        objBigBoxImage.style.top = -top * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) / (objSmallBox.offsetHeight - objSmallboxGlass.offsetHeight) + "px";

    });


}









