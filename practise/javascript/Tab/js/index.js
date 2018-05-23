

(function(){
    // 1. 变量定义
    let obj = {
        tabWrap: document.querySelector(".tab-ct-wrap"),
        menuItems: document.querySelectorAll(".tab-menu-item"),
        contentItems: document.querySelectorAll(".tab-content-item"),
        curIndex: 0,
        timer: null
    };

    // 2. 遍历菜单项/添加索引/事件
    for(let i = 0, len = obj.menuItems.length; i < len; i++) {
        obj.menuItems[i].dataset.index = i;
        obj.menuItems[i].onmouseenter = (e) => {
            let index = e.target.dataset.index;
            // 异常处理
            if(index == obj.curIndex) {
                return;
            }
            obj.curIndex = index;
            tab(obj);
        }
    }
    let timer = null;
    // 3. 鼠标移入移除
    obj.tabWrap.onmouseenter = () => {
        stop(obj);
    };
    obj.tabWrap.onmouseleave = () => {
        play(obj);
    };
    // 自动播放
    play(obj);
})();



