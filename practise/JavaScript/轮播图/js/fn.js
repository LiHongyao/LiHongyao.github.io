function fade() {
    // 1. 获取DOM元素
    let slides = document.querySelectorAll(".fade .slide");
    let paginationItems = [...document.querySelectorAll(".fade .pagination-item")];
    let prevBtn = document.querySelector(".fade .prev");
    let nextBtn = document.querySelector(".fade .next");
    let flash   = document.querySelector(".fade .flash");
    let curIndex = 0, // 记录当前下标
        lasIndex = 0, // 记录上一次下标
        length = slides.length, // 获取图片张数
        timer = null;
    // 2. 自动播放
    play();
    // 3. 事件
    // 3.1. 自动播放启动暂停
    flash.onmouseenter = stop; // 当鼠标移至容器上时，暂停定时器
    flash.onmouseleave = play; // 当鼠标移出容器上时，启动定时器
    // 3.2. 点击下一页
    nextBtn.onclick = function () { 
        // 计算下标
        curIndex = curIndex == length - 1 ? 0 : ++curIndex;
        // 切换视图
        tab();
    }
    // 3.3. 点击上一页
    prevBtn.onclick = function () {
        // 计算下标
        curIndex = curIndex == 0 ? curIndex = length - 1 : --curIndex;
        // 切换视图
        tab();
    }
    // 3.4. 点击小圆点
    paginationItems.forEach(pagination => {
        pagination.onclick = function () {
            // 获取点击分页的下标
            let index = paginationItems.indexOf(this);
            // 异常处理：如果点击的分页下标刚好是目前正在显示的图片下标，则不作处理
            if (index == curIndex) { return; }
            // 更新下标
            curIndex = index;
            // 切换视图
            tab();
        }
    });

    // 4. 函数
    // 4.1. 自动播放
    function play() {
        console.log("1");
        timer = setInterval(() => {
            nextBtn.onclick();
        }, 3000);
    }
    // 4.2. 暂停播放
    function stop() {
        console.log(2);
        clearInterval(timer);
    }
    // 4.3. 切换
    function tab() {
        // 清除上一次效果
        removeClass(slides[lasIndex], "show");
        removeClass(paginationItems[lasIndex], "sel");
        // 添加这一次效果
        addClass(slides[curIndex], "show");
        addClass(paginationItems[curIndex], "sel");
        // 更新lastIndex
        lasIndex = curIndex;
    }
    // 4.4. 移除class 
    function removeClass(el, className) {
        el.classList.remove(className);
    }
    // 5.5. 添加clss
    function addClass(el, className) {
        el.classList.add(className);
    }

}

function scroll() {
    // 1. 获取DOM元素
    let paginationItems = [...document.querySelectorAll(".scroll .pagination-item")];
    let prevBtn = document.querySelector(".scroll .prev");
    let nextBtn = document.querySelector(".scroll .next");
    let flash = document.querySelector(".scroll .flash");
    let wrapper = document.querySelector(".scroll .wrapper");
    let width = parseInt(getStyle(flash, "width")); // 获取容器宽度
    let length = paginationItems.length, // 获取图片显示的张数（实际显示）
        curIndex = 1, // 记录当前显示图片的下标
        lastSelIndex = 1; // 记录上一次显示图片的下标，便于后面移除
        isAnimating = false, // 记录当前是否正在做一个滚动效果
        timer = null; // 定时器
    // 2. 更新位置
    wrapper.style.transform = `translateX(-${width}px)`;
    // 3. 自动播放
    play();
    // 4. 事件监听
    flash.onmouseenter = stop;
    flash.onmouseleave = play;
    window.onresize = function () {
        width = parseInt(getStyle(flash, "width")); 
    }
    nextBtn.onclick = function () {
        if(isAnimating) return;
        curIndex = curIndex == length ? 1 : ++curIndex;
        tab(-width);
        updatePagination();
    }
    prevBtn.onclick = function () {
        if(isAnimating) return;
        curIndex = curIndex == 1 ? length : --curIndex;
        tab(width);
        updatePagination();
    }
    paginationItems.forEach(pagination => {
        pagination.onclick = function() {
            let index = paginationItems.indexOf(this) + 1;
            if(index == curIndex || isAnimating) return;
            let offset = -width * (index - curIndex);
            curIndex = index;
            tab(offset);
            updatePagination();
        }
    });
    // 5. 函数    
    function play() {
        timer = setInterval(() => {
            nextBtn.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(timer);
    }
    function tab(offset) {
        // 计算目标偏移  
        let desOffset = lastSelIndex * -width + offset;
        let curOffset = lastSelIndex * -width;
        // 帧动画
        let duration = 500;
        let interval = 15;
        let speed = Math.ceil(offset / (duration / interval));
        isAnimating = true;
        let t = setInterval(() => {
            // 左滑 (offset < 0 && curOffset > desOffset)
            // 右滑 (offset > 0 && curOffset < desOffset)
            if ((offset < 0 && curOffset > desOffset) || (offset > 0 && curOffset < desOffset)) {
                curOffset += speed;
                wrapper.style.transform = `translateX(${curOffset}px)`;
            } else {
                isAnimating = false;
                clearInterval(t);
                // 矫正误差
                wrapper.style.transform = `translateX(${curIndex * -width}px)`;
                // 边界值处理
                if (desOffset > -width) {
                    wrapper.style.transform = `translateX(${-length * width}px)`;
                } else if (desOffset < -length * width) {
                    wrapper.style.transform = `translateX(${-width}px)`;
                } 
            }
        }, interval);
    }
    function updatePagination() {
        paginationItems[lastSelIndex - 1].classList.remove("sel");
        paginationItems[curIndex - 1].classList.add("sel");
        lastSelIndex = curIndex;
    }
    function getStyle(el, attr) {
        if (el.currentStyle) {
            return el.currentStyle[attr];
        } else {
            return getComputedStyle(el, null)[attr];
        }
    }
}

