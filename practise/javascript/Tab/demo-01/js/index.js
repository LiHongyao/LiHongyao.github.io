(function() {
    // 1. 获取元素
    var wrapper  = document.querySelector('.tab-wrapper');
    var menus    = Array.from(document.querySelectorAll('.tab-menu li'));
    var contents = Array.from(document.querySelectorAll('.tab-content img'));
    var timer    = null;
    var curIndex = 0;
    // 2. 为菜单项添加点击事件切换内容
    menus.forEach(function(menu, index) {
        // 添加自定义下标属性
        menu.dataset.index = index;
        menu.onclick = function() {
            // 获取点击菜单项的下标
            var index = this.dataset.index;
            // 清除上一次的样式
            for(var i = 0, len = menus.length; i < len; i++) {
                if(menus[i].classList.contains('selected')) {
                    menus[i].classList.remove('selected');
                    contents[i].classList.remove('show');
                }
            }
            // 切换选中菜单
            menus[index].classList.add('selected');
            // 切换内容
            contents[index].classList.add('show');
        }
    });
    // 3. 自动播放
    play();
    // 4. 移入停止/移出播放
    wrapper.onmouseenter = stop;
    wrapper.onmouseleave = play;

    function play() {
        timer = setInterval(function() {
            if(curIndex === 3) {
                curIndex = 0;
            }else {
                curIndex++;
            }
            menus[curIndex].onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(timer);
    }

})();