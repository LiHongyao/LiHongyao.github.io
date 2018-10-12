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
 *  大图片宽 = 小图片宽 * 大图片局部宽 / 放大镜宽
 */
(function() {
    // 1. 获取DOM元素
    var container = getEl('.container');
    var smallBox  = getEl('.small-box');
    var mirror    = getEl('.mirror');
    var smallImg  = getEl('.small-img');
    var bigBox    = getEl('.big-box');
    var bigImg    = getEl('.big-img');
    // 2. 更新大图尺寸
    var _width  = parseInt(getStyle(smallImg, "width"))   * parseInt(getStyle(bigBox, "width"))   / parseInt(getStyle(mirror, "width"));
    var _height = parseInt(getStyle(smallImg, "height"))  * parseInt(getStyle(bigBox, "height"))  / parseInt(getStyle(mirror, "height"));
    bigImg.style.width  = _width + "px";
    bigImg.style.height = _height + "px";
    // 3. 鼠标移动
    smallBox.onmousemove = function(event) {
        // 3.1. 计算放大镜的位置
        var _left = event.clientX - container.offsetLeft - smallBox.offsetLeft - parseInt(getStyle(mirror, "width")) / 2 + window.pageXOffset;
        var _top  = event.clientY - container.offsetTop - smallBox.offsetTop - parseInt(getStyle(mirror, "height")) / 2  + window.pageYOffset;
        // 3.2. 计算放大镜/大图可移动的最大距离
        var _mirrorMaxH = parseInt(getStyle(smallImg, "width"))  - parseInt(getStyle(mirror, "width"));
        var _mirrorMaxV = parseInt(getStyle(smallImg, "height")) - parseInt(getStyle(mirror, "height"));
        var _bigImgMaxH = parseInt(getStyle(bigImg, "width"))    - parseInt(getStyle(bigBox, "width"));
        var _bigImgMaxV = parseInt(getStyle(bigImg, "height"))   - parseInt(getStyle(bigBox, "height"));

        // 3.3. 异常处理
        // 水平
        if(_left < 0) {
            _left = 0;
        }else if(_left > _mirrorMaxH) {
            _left = _mirrorMaxH;
        }
        // 垂直
        if(_top < 0) {
            _top = 0;
        }else if(_top > _mirrorMaxV) {
            _top = _mirrorMaxV;
        }
        // 3.4. 更新放大镜的位置
        mirror.style.top  = _top  + "px";
        mirror.style.left = _left + "px";
        // 3.5. 计算大图移动的距离
        // 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
        bigImg.style.top  = -_top  * _bigImgMaxH / _mirrorMaxH + "px";
        bigImg.style.left = -_left * _bigImgMaxV / _mirrorMaxV + "px";
    }
})();

