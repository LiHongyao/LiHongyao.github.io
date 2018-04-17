/**
 * Created by LiHongyao on 2017/7/11.
 */

// 接口函数
/**
 * 轮播图
 * @param container   容器
 * @param imgs        图片集合（相对路径）
 * @param btnImgs     左右按钮集合（相对路径）
 * @param interval    图片切换时间
 */
function flash(container, imgs, btnImgs, interval) {
    // 1、异常处理
    if(!container || !imgs || !btnImgs) {
        return;
    }
    // 2、变量定义
    var oNext   = null; // 下一页按钮
    var oPrev   = null; // 上一页按钮
    var oImgBox = null; // 存放图片的盒子/后面需要更改其left实现图片的切换
    var aIdots  = [];   // 小圆点集合，便于后面设置小圆点active
    var aImgs   = [];   // 图片元素集合，便于后面调整窗口大小更改其尺寸
    var kWidth  = parseInt(getStyle(container, 'width'));       // 获取容器宽度，便于后面设置默认状态下个子元素尺寸
    var kMinWidth = parseInt(getStyle(container, 'min-width')); // 获取最小宽度，便于后面判断是否设置该样式做视窗调整处理

    var curImgIdx   = 1;     // 记录当前图片显示的下标位置
    var isAnimating = false; // 记录位移动画状态
    var timer       = null;  // 指向自动轮播创建的定时器
    var interval    = interval == undefined ? 4000 : interval; // 默认处理，图片切换时间

    // 3、构造元素
    crateElements();
    // 4、自动轮播
    play();

    // 5、事件添加

    // 5.1、点击下一页
    addEvent(oNext, 'click', goNext);
    // 5.2、点击上一页
    addEvent(oPrev, 'click', goPrev);
    // 5.3、点击小圆点
    aIdots.forEach(function (idot, idx) {
        // 为小圆点定义一个下标
       idot.idx = idx + 1;
       addEvent(idot, 'click', function () {
           if(isAnimating || this.idx == curImgIdx) {
               return;
           }

           // offset = -(desIdx - curImgIdx) * kWidth
           var offset = -(this.idx - curImgIdx) * kWidth;
           tab(offset);
           // 更新当前图片显示的下标位置
           curImgIdx = this.idx;
           changeIdots();
       }) ;
    });

    // 5.4、自动轮播 -> 鼠标移入flash区域，停止定时器
    addEvent(container, 'mouseenter', function () {
        stop();
    });
    // 5.5、自动轮播 -> 鼠标移除flash区域，启动定时器
    addEvent(container, 'mouseleave', function () {
        play();
    });
    // 5.6、调整窗口大小，更新flash相关视图尺寸
    addEvent(window, 'resize', function () {
        stop();
        var curContainerWidth = parseInt(getStyle(container, 'width'));
        // 如果设置最小宽度，且窗口大小大于最小宽度，则flash 子元素尺寸与窗口宽度一致
        if(kMinWidth && curContainerWidth >= kMinWidth) {
            // 更新kWidth值
            kWidth  = curContainerWidth;
            updateSize();
        }
        // 如果设置最小宽度，且窗口大小小于最小宽度时，则固定flash 子元素尺寸适应最小宽度
        else if(kMinWidth && curContainerWidth < kMinWidth) {
            kWidth  = kMinWidth;
            updateSize();
        }
        // 如果未设置最小宽度，则直接适应容器宽度
        else if(!kMinWidth) {
            kWidth  = curContainerWidth;
            updateSize();
        }
        play();
    });
    function updateSize() {
        aImgs.forEach(function (oImg) {
            oImg.style.width = kWidth + 'px';
        });
        // 设置偏移，默认显示第一张图片
        oImgBox.style.left = -curImgIdx * kWidth + 'px';
        // 计算img-box宽度 1100px
        oImgBox.style.width = kWidth * (imgs.length + 2) + 'px';
    }

    // 6、函数封装
    /*----------------------自动轮播----------------------*/
    function play() {
        if(timer) {
            stop();
        }
        timer = setInterval(function () {
            goNext();
        }, interval);
    }
    function stop() {
        window.clearInterval(timer);
        timer = null;
    }


    /*----------------------交互----------------------*/
    /**
     * 切换
     * @param offset 偏移量
     */
    function tab(offset) {

        isAnimating = true;

        // 设置帧动画
        // 默认处理
        var duration = 800;
        var interval = 30;
        var speed    = Math.ceil(offset/(duration/interval));
        // 执行动画
        var curLeft = null;
        var desLeft = parseInt(getStyle(oImgBox, 'left')) + offset;
        var t = setInterval(function () {
            // 位移....
            curLeft = parseInt(getStyle(oImgBox, 'left'));
            // 判断是否继续执行位移动画
            if((offset < 0 && curLeft > desLeft) || (offset > 0 && curLeft < desLeft)) {
                oImgBox.style.left = curLeft + speed + 'px';
            }else {
                // 动画结束
                // 清除定时器
                clearInterval(t);
                isAnimating = false;
                // 矫正误差
                oImgBox.style.left = desLeft + 'px';
                curLeft = parseInt(getStyle(oImgBox, 'left'));
                if(curLeft == -(imgs.length + 2 - 1) * kWidth) {
                    oImgBox.style.left = -kWidth + 'px';
                }else  if(curLeft == 0) {
                    oImgBox.style.left = -(imgs.length) * kWidth + 'px';
                }
            }
        }, interval);
    }

    /**
     * 改变小圆点样式
     */
    function changeIdots() {
        // 清除上一次小圆点选中的样式
        var i ;
        for(i = 0; i < aIdots.length; i++) {
            if(aIdots[i].classList.contains('active')) {
                aIdots[i].classList.remove('active');
                break;
            }
        }
        aIdots[curImgIdx - 1].classList.add('active');
    }

    /**
     * 切换至下一张
     */
    function goNext() {
        // 如果正在执行位移动画，直接终止操作
        if(isAnimating) {
            return;
        }

        if(curImgIdx == imgs.length) {
            curImgIdx = 1;
        }else {
            curImgIdx++;
        }
        tab(-kWidth);  // 切换
        changeIdots(); // 更新小圆点
    }

    /**
     * 切换至上一张
     */
    function goPrev() {
        if(isAnimating) {
            return;
        }

        if(curImgIdx == 1) {
            curImgIdx = imgs.length;
        }else {
            curImgIdx--;
        }
        tab(kWidth);   // 切换
        changeIdots(); // 更新小圆点
    }

    /*----------------------布局----------------------*/
    /**
     * 创建元素
     */
    function crateElements() {
        // 创建子容器
        var oFlashBox = document.createElement('div');
        var oIdots    = document.createElement('div');
        var oBtns     = document.createElement('div');

        oImgBox   = document.createElement('div');

        // 设置类名
        oFlashBox.className = 'lhy-flash-box';
        oImgBox.className   = 'img-box';
        oIdots.className    = 'idot-box';
        oBtns.className     = 'btn-box';

        // 添加子容器
        container.appendChild(oFlashBox);
        oFlashBox.appendChild(oImgBox);
        oFlashBox.appendChild(oIdots);
        oFlashBox.appendChild(oBtns);

        // 设置图片容器默认大小
        // 之所以加2个宽度是为后面无限轮播铺垫
        oImgBox.style.width = kWidth * (imgs.length + 2) + 'px';
        // 设置偏移，默认显示第一张图片
        oImgBox.style.left = -kWidth + 'px';

        // 创建子元素
        var i;
        // 1、图片
        for(i = 0; i < imgs.length + 2; i++) {
            var oImg = document.createElement('img');
            // 设置图片宽度
            oImg.style.width  = kWidth + 'px';
            oImgBox.appendChild(oImg);
            // 指定图片名称
            if(i == 0) {
                oImg.src = imgs[imgs.length - 1];
            }else if(i == imgs.length + 2 - 1) {
                oImg.src = imgs[0];
            }else {
                oImg.src = imgs[i - 1];
            }
            aImgs.push(oImg);
        }
        // 2、小圆点
        for(i = 0; i < imgs.length; i++) {
            var oIdot = document.createElement('span');
            oIdot.className = 'idot';
            if(i == 0) {
                oIdot.classList.add('active');
            }
            oIdots.appendChild(oIdot);
            // 将小圆点存到数组集合中
            aIdots.push(oIdot);
        }
        // 3、按钮
        oNext = document.createElement('span');
        oPrev = document.createElement('span');

        oNext.className = 'btn next';
        oPrev.className = 'btn prev';

        oPrev.style.background = 'url(' + btnImgs.left + ') no-repeat center';
        oNext.style.background = 'url(' + btnImgs.right + ') no-repeat center';

        oBtns.appendChild(oPrev);
        oBtns.appendChild(oNext);
    }

    /**
     * 添加事件
     * @param element  事件对象
     * @param type     事件类型
     * @param callBack 回调函数
     */
    function addEvent(element, type, callBack) {
        // 兼容IE10.0以下
        if(element.attachEvent) {
            element.attachEvent('on' + type, callBack);
        }else {
            element.addEventListener(type, callBack, false);
        }
    }

    /**
     * 获取非行间样式
     */
    function getStyle(obj, attr) {
        // 兼容IE
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }else {
            return getComputedStyle(obj, null)[attr];
        }
    }
}












































