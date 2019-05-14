// 自调用函数，保护变量不被篡改
(function () {
    // 1. 轮播图
    flash();
    // 2. 加载明星产品
    // 请求产品数据
    $.ajax({
        url: "../json/star-products.json", // 请求地址
        success(res) { // 请求成功回调函数 res => 结果
            // 异步加载 
            // $.each(遍历对象， 回调函数)  => 遍历
            let htmlStr = "";
            $.each(res, function (_, obj) {
                htmlStr += ` <li>
                    <div class="img">
                        <img src="${obj.src}">
                    </div>
                    <p class="name">${obj.name}</p>
                    <p class="line"></p>
                    <p class="price">${obj.price}</p>
                </li>`;
            });
            $(".product-list").html(htmlStr);
        }
    });

    // 3. 加载tab选项卡
    $.ajax({
        url: "../json/tab.json",
        success(res) {
            // 异步加载菜单
            let menuStr = "";
            $.each(res.menus, function(_, menu) {
                menuStr += `<li>${menu}</li>`
            });
            $(".tab-menu-list").html(menuStr);
            // 异步加载内容
            let ctStr = "";
            $.each(res.contents, function(_, imgs) {
                ctStr += `<li>${(function() {
                    let imgStr = "";
                    $.each(imgs, function(_, src) {
                        imgStr += `<img src="${src}">`
                    })
                    console.log(imgStr)
                    return imgStr;
                })()}</li>`
            })
            $(".tab-ct-list").html(ctStr);
            // 交互设计 
            // jquery 查找元素 $("CSS选择器")
            $(".tab-menu-list li").first().addClass("sel");
            $(".tab-ct-list li").first().addClass("show");
            // 监听用户点击
            $(".tab-menu-list li").click(function() {
                // $(this) -> 指向用户点击的元素
                // siblings() -> 所有的兄弟节点
                // 1. 切换菜单显示
                $(this).addClass("sel").siblings().removeClass("sel");
                // 2. 切换内容显示
                // $(this).index()  ->获取选中下标
                $(".tab-ct-list li").eq($(this).index()).addClass("show").siblings().removeClass("show");
            });

        }
    });

    // 4.回到顶部
    $(".top-btn").click(function() {
        // 将页面滚动至顶部位置
        $("html, body").animate({
            scrollTop: 0, 
        }, 1000);
    });

})();


