

// 自调用函数：自动执行
// 保护私有变量
(function () {


    // 获取菜单项
    var lis = document.querySelectorAll(".menu-list > li");
    // 获取内容模块
    var cts = document.querySelectorAll(".ct-item");
    // 定义集合存储内容模块在页面中的位置
    var offsets = [0];
    // 获取回到顶部按钮
    var goTopBtn = document.querySelector(".go-top");


    // 打印输出lis变量
    console.log(lis);
    console.log(cts);

    // 添加滚动事件，监听页面滚动
    window.onscroll = function () {
        // 打印输出页面滚出去的距离
        var offset = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(offset);
    };

    // 监听用户点击回到顶部按钮
    goTopBtn.onclick = function () {
      goTop();
    };


    // 遍历内容模块，获取模块在页面中的位置
    for(var i = 0; i < cts.length; i++) {
        // 将模块在页面中的位置存入集合
        offsets.push(cts[i].offsetTop - 40);
    }
    console.log(offsets);
    // 遍历li元素
    for(var i = 0; i < lis.length; i++) {
        // 为菜单项添加下标属性
        lis[i].dataset.index = i;
        // 为菜单项添加点击事件
        lis[i].onclick = function () {
            // this -> 当前用户点击的菜单项
            // this.textContent -> 获取当前点击菜单项的文本内容
            console.log("用户点击了->" + this.textContent + "，下标：" + this.dataset.index);
            // 获取点击菜单项内容在页面中的位置
            var offset = offsets[this.dataset.index];
            // 设置页面显示的位置
            document.body.scrollTop = document.documentElement.scrollTop = offset;

        }
    }

    

    // 调用函数，展示地图
    showMap();


})();



















