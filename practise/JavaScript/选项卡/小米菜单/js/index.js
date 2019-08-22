(function() {
    // 1. 加载数据
    var menuList = document.querySelector('.menu-list');
    var head     = document.querySelector('.head');
    var width    = head.offsetWidth;
    var menuItemContents = null;
    window.onresize = function() {
        width    = head.offsetWidth;
        updateMenuItemContentW(menuItemContents, width);
    }

    $.ajax({
        url:"../json/info.json",
        success: function(response) {
            loadingMenuList(menuList, response);
            // 处理tab内容容器宽度
            menuItemContents = Array.from(document.querySelectorAll('.menu-item-content'));
            updateMenuItemContentW(menuItemContents, width);
        }
    });
    // 2. 菜单偏移效果
    var curOffset  = 0;
    var lastOffset = 0;
    window.onscroll = function() {
        curOffset = document.body.scrollTop || document.documentElement.scrollTop;
        if(curOffset > lastOffset) {
            // 隐藏
            head.classList.add('hidden');
        }else {
            // 显示
            head.classList.remove('hidden');
        }
        lastOffset = curOffset;
    }
})();