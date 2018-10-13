(function() {
    // 1. 处理游标
    var tabBarItems = Array.from(document.querySelectorAll('.tabBar-item'));
    var cursor      = document.querySelector('.cursor');
    var title       = document.querySelector('.title');
    var tabPages    = Array.from(document.querySelectorAll('.tab-page'));
    tabBarItems.forEach(function(tabBarItem, index) {
        // 为tabBarItem添加自定义下标属性
        tabBarItem.dataset.index = index;
        tabBarItem.onclick = function() {
            // 获取点击的tabBarItem的下标
            var index = this.dataset.index;
            // 切换游标
            cursor.style.left = `${25 * index}%`; 
            // 修改标题
            title.textContent = this.dataset.title;
            // 切换
            for(var i = 0, len = tabPages.length; i < len; i++) {
                if(tabPages[i].classList.contains("show")) {
                    tabPages[i].classList.remove("show");
                    break;
                }
            }
            tabPages[index].classList.add("show");
        }
    });

})();