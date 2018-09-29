(function() {

    // 路由跳转
    var tabBarItems = Array.from(document.querySelectorAll('.tabBar-item'));
    var title       = document.querySelector('.title');
    var cursor      = document.querySelector('.cursor');
    var content     = document.querySelector('.content');
    var curIndex    = null;

    tabBarItems.forEach(function(tabBarItem, index) {
        // 设置自定义下标属性
        tabBarItem.dataset.index = index;
        tabBarItem.onclick = function(event) {
            // 获取事件对象
            var _this = this;
            // 获取文件名
            var pathName = _this.dataset.link;
            // 获取自定义下标
            var index = _this.dataset.index;
            // 异常处理
            if(curIndex && index == curIndex) { return; }
            // 修改游标位置
            cursor.style.left = `${25 * index}%`;
            // 更新当前显示下标
            curIndex = index;
            // 修改标题
            title.textContent = _this.dataset.title;
            // 修改hash值
            location.hash = pathName;
            // 拼接路径
            var path = "../pages/" + pathName + ".html";
            // 异步加载页面
            $.ajax({
                url: path,
                success: function(htmlStr) {
                    // 渲染页面
                    content.innerHTML = htmlStr; 
                    // 引入脚本
                    // innerHTML 不会解析请求页面中的脚本
                    // 所以需要通过appendChild的形式添加元素
                    var scriptNode = document.createElement('script');
                    scriptNode.src = '../js/' + pathName + '.js';
                    content.appendChild(scriptNode);
                }
            })
        }
    });
    // 默认显示主页
    tabBarItems[0].onclick();
 
})();

