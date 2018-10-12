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
 *  关于图片的比例问题
 *  也可以这样做：
 *  大图的宽 / 小图的宽 = 大图的移动距离 / 小图的移动距离
 */


 (function() {
     // 1. 获取DOM元素
     let objContainer      = getEl(".container"),
         objSmallBox       = getEl(".small-box"),
         objSmallBoxMirror = getEl(".mirror"),
         objSmallBoxImg    = getEl(".small-img"),
         objBigBox         = getEl(".big-box"),
         objBigImg         = getEl(".big-img");
    // 2. 更新大图尺寸
    let w = parseInt(getStyle(objSmallBoxImg, "width")) * parseInt(getStyle(objBigBox, "width")) / parseInt(getStyle(objSmallBoxMirror, "width")),
        h = parseInt(getStyle(objSmallBoxImg, "height")) * parseInt(getStyle(objBigBox, "height")) / parseInt(getStyle(objSmallBoxMirror, "height"));
    objBigImg.style.cssText = `width: ${w}px; height: ${h}px`;

    // 3. 当鼠标移入小图时显示放大镜和大图
    objSmallBox.onmouseenter = () => {
        objSmallBoxMirror.style.display = "block";
        objBigBox.style.display = "block";
    }
    // 4. 当鼠标移出小图时隐藏放大镜和大图
    objSmallBox.onmouseleave = () => {
        objSmallBoxMirror.style.display = "none";
        objBigBox.style.display = "none";
    }
    // 5. 当鼠标在小图上移动时  
    objSmallBox.onmousemove = (e) => {
        // 5.1 计算放大镜在容器中的位置
        let left = e.clientX - objContainer.offsetLeft - objSmallBox.offsetLeft - objSmallBoxMirror.offsetWidth / 2,
            top  = e.clientY - objContainer.offsetTop - objSmallBox.offsetTop - objSmallBoxMirror.offsetHeight / 2;
        // 5.2 异常处理/边界值处理
        if(left < 0) {
            // 滑到最左
            left = 0;
        }else if(left > objSmallBox.offsetWidth - objSmallBoxMirror.offsetWidth) {
            // 滑到最右
            left = objSmallBox.offsetWidth - objSmallBoxMirror.offsetWidth;
        }
        if(top < 0) {
            // 滑到最上
            top = 0;
        }else if (top > objSmallBox.offsetHeight - objSmallBoxMirror.offsetHeight) {
            // 滑到最下
            debugger
            top = objSmallBox.offsetHeight - objSmallBoxMirror.offsetHeight;
        }
        
        // 5.3 设置放大镜的位置
        objSmallBoxMirror.style.left = left + "px";
        objSmallBoxMirror.style.top  = top  + "px";

        // 5.4 设置大图片位置
        // 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
        objBigImg.style.left = -left * (objBigImg.offsetWidth - objBigBox.offsetWidth) / (objSmallBox.offsetWidth - objSmallBoxMirror.offsetWidth) + "px";
        objBigImg.style.top  = -top * (objBigImg.offsetHeight - objBigBox.offsetHeight) / (objSmallBox.offsetHeight - objSmallBoxMirror.offsetHeight) + "px";
    } 
    
 })();
