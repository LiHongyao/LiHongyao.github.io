// 获取DOM
function $(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

/**
 * 获取非行内样式
 * @param el     目标元素节点
 * @param attr   对应属性键（key）
 * @returns {*}  对应属性值（value）
 */
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}


function fade() {
    // 1. 获取DOM元素
    var _prevBtn  = $('.fade .prev');
    var _nextBtn  = $('.fade .next');
    var _imgs     = $('.fade img', true);
    var _idots    = $('.fade .idot', true);
    var _wrapper  = $('.fade-flash-wrapper');
    var _curIndex = 0; 
    var _timer    = null;
    // 2. 左右切换
    _prevBtn.onclick = function() {
        // 切换下标
        if(_curIndex === 0) {
            _curIndex = 5;
        }else {
            _curIndex--;
        }
        // 切换图片
        tab();
        updateIdot();
    }
    _nextBtn.onclick = function() {
        // 切换下标
        if(_curIndex === 5) {
            _curIndex = 0;
        }else {
            _curIndex++;
        }
        // 切换图片
        tab();
        updateIdot();
    }
    // 3. 点击小圆点切换
    _idots = Array.from(_idots); // es6 转数组
    _idots.forEach(function(idot, index) {
        // 添加自定义属性
        // data-index
        idot.dataset.index = index;
        idot.onclick = function() {
            var index = parseInt(this.dataset.index);
            // 异常处理
            if(index === _curIndex) {
                return;
            }
            // 更新当前显示下标
            _curIndex = index;
            // 切换图片
            tab();
            updateIdot();
        }
    });
    // 4. 自动切换
    play();
    // 5. 鼠标移入，停止定时器
    //    鼠标移出，启动定时器
    _wrapper.onmouseenter  = stop;
    _wrapper.onmouseleave = play;
    // 6. 函数封装
    function play() {
        console.log('启动');
        _timer = setInterval(function() {
            _nextBtn.onclick();
        }, 3000);
    }
    function stop() {
        console.log('暂停');
        clearInterval(_timer);
    }
    function updateIdot() {
        for(var i = 0, len = _idots.length; i < len; i++) {
            if(_idots[i].classList.contains('selected')) {
                _idots[i].classList.remove('selected');
                break;
            }
        }
        _idots[_curIndex].classList.add('selected');
    }
    function tab() {
        // 显示_curIndex指定的图片
        // 异常处理/隐藏上一次显示的图片
        for(var i = 0, len = _imgs.length; i < len; i++) {
            if(_imgs[i].classList.contains("show")) {
                _imgs[i].classList.remove("show");
                break;
            }
        }
        _imgs[_curIndex].classList.add("show");
    }
}


function scroll() {
    // 1. 获取DOM元素
    var _prevBtn     = $('.scroll .prev');
    var _nextBtn     = $('.scroll .next');
    var _idots       = $('.scroll .idot', true);
    var _wrapper     = $('.scroll-flash-wrapper');
    var _imgBox      = $('.scroll .img-box');
    var _curIndex    = 1; 
    var _timer       = null;  // 存储定时器/自动播放使用
    var _isAnimating = false; // 记录动画状态
    var _kWidth      = parseInt(getStyle(_wrapper, "width"));
    // 2. 自适应处理
    // 由于元素绝对定位脱离文档流，故父级元素无法获取子元素高度
    // 但我们可以通过脚本获取子元素高度之后赋值给容器即可
    _wrapper.style.height  = getStyle(_imgBox, "height");
    _imgBox.style.left     = "-" + _kWidth + "px";
    // 监听窗口变化/重新计算容器尺寸
    window.onresize = function() {
        _kWidth   = parseInt(getStyle(_wrapper, "width"));
        _wrapper.style.height  = getStyle(_imgBox, "height");
        // 更新left值
        _imgBox.style.left     = "-" + _curIndex * _kWidth + "px";
    }
    // 3. 左右切换
    _prevBtn.onclick = function() {
        // 异常处理
        // 当上一次切换动画还为结束时，禁止切换
        if(_isAnimating) { return; }
        // left 在当前位置的基础上(+|-)kWidth
        if(_curIndex === 1) {
            _curIndex = 6;
        }else {
            _curIndex--;
        }
        tab(+_kWidth);
        updateIdot();
    }
    _nextBtn.onclick = function() {
        if(_isAnimating) { return; }
        if(_curIndex === 6) {
            _curIndex = 1;
        }else {
            _curIndex++;
        }

        tab(-_kWidth);
        updateIdot();
    }
    // 4. 小圆点切换
    _idots.forEach(function(idot, index) {
        idot.dataset.index = index + 1;
        idot.onclick = function() {
            var index = parseInt(this.dataset.index);
            if(index === _curIndex || _isAnimating) {
                return;
            }
            // 计算偏移
            // -(desIndex - curIndex) * _kWidth
            var offset = -(index - _curIndex) *  _kWidth;
            // 切换
            tab(offset);
            // 更新下标显示
            _curIndex = index ;
            // 更新小圆点显示
            updateIdot();
        }
    });
    // 5. 自动播放
    play();
    // 6. 异常处理 
    // 鼠标移入 停止定时器
    // 鼠标移出 启动定时器
    _wrapper.onmouseenter = stop;
    _wrapper.onmouseleave = play;

    // 7. 函数封装
    function play() {
        _timer = setInterval(function() {
            _nextBtn.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(_timer);
    }
    function updateIdot() {
        for(var i = 0, len = _idots.length; i < len; i++) {
            if(_idots[i].classList.contains('selected')) {
                _idots[i].classList.remove('selected');
                break;
            }
        }
        _idots[_curIndex - 1].classList.add('selected');
    }
    function tab(offset) {
        // 更新动画状态
        _isAnimating = true;
        // 滚动效果
        var duration = 600,
            interval = 10,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);
        var curLeft  = parseInt(_imgBox.style.left);
        var desLeft  = curLeft + offset;
        var isScroll = false;
        var t = setInterval(function() {
            // 更新当前偏移
            // offset < 0  左 curLeft > desLeft 
            // offset > 0  右 curLeft < desLeft
            curLeft  = parseInt(_imgBox.style.left);
            isScroll = (offset < 0 && curLeft > desLeft) || (offset > 0 && curLeft < desLeft);
            if(isScroll) {
                _imgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                // 更新动画状态
                _isAnimating = false;
                // 更新偏移
                _imgBox.style.left = desLeft + 'px';
                // 无限滚动
                if(desLeft < -6 * _kWidth) {
                    _imgBox.style.left = -_kWidth + 'px';
                }else if(desLeft > -_kWidth) {
                    _imgBox.style.left = -6 * _kWidth + 'px';
                }
            }
        }, interval);
    }
}