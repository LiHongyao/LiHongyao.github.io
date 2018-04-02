

(function () {

    var contentItems = $.get(".tab-content-item"),
        menuItems    = $.get(".tab-menu-item"),
        tab          = $.get("#tab"),
        curIndex     = 0,
        timer        = null;
    /**
     * 事件添加
     */
    for(var i = 0, len = menuItems.length; i < len; i++) {
        menuItems[i].dataset.idx = i;
        $.addEvent(menuItems[i], "mouseenter", function () {
            // 获取点击的下标
            var index = this.dataset["idx"];
            // 判断：如果点击当前正在显示的内容模块则不做任何操作
            if(index == curIndex) {
                return;
            }
            // 更新当前显示的下标
            curIndex = index;
            // 调用切换显示的方法
            switching();
        });
        $.addEvent(contentItems[i], "click", function () {
             console.log("您点击了第" + curIndex + "块内容！");
        });
    }
    $.addEvent(tab, "mouseenter", stop);
    $.addEvent(tab, "mouseleave", play);

    /**
     * 自动播放
     */
    play();
    
    
    /**
     * 函数定义
     */
    
    function play() {
        console.log("启动定时器！");
        timer = setInterval(function () {
            curIndex++;
            if(curIndex == 4) {
                curIndex = 0;
            }
            switching();
        }, 3000);
    }
    function stop() {
        console.log("停止定时器！");
        clearInterval(timer);
        timer = null;
    }
    function switching() {
        // 清除上一次选中的样式
        for(var i = 0, length = menuItems.length; i < length; i++) {
            // 由于菜单与内容显示模块的下标是一直的
            // 因此只要找到了菜单项存在的clas
            // 则直接可以通过这个下标隐藏对应内容的显示
            // 并且由于显示的模块肯定只有一个
            // 因此一旦找到了对应的匹配的元素之后则可直接通过break关键字终止循环
            if(menuItems[i].classList.contains("active")) {
                menuItems[i].classList.remove("active");
                contentItems[i].classList.remove("active");
                break;
            }
        }
        // 修改选中菜单项的样式
        menuItems[curIndex].classList.add("active");
        // 显示对应的内容
        contentItems[curIndex].classList.add("active");
    }
})();



















