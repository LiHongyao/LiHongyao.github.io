$(function(){
    // 指定当前选中下标
    let curIndex = null;
    $(".bar-item").on("click", (e) => {
        // 目标对象
        let $target = $(e.currentTarget);
        // 异常处理
        if(curIndex && $target.index() == curIndex) {
            return;
        };
        // 修改导航标题
        $(".navigation-bar .title").text($target.find("span").text());
        // 修改游标位置
        $(".cursor").css({
            "left": $target.index() * $target.width()
        });
        // 更新当前显示下标
        curIndex = $target.index();
        // 异步加载页面
        $.ajax({
            // 请求页面地址
            url: `../pages/${$target.attr("data-link")}.html`,
            // 请求成功
            success: (response) => {
                // 更新hash值
                location.hash = $target.attr("data-link");
                // 渲染页面
                $(".content").empty();
                $(".content").html(response);
                // 清空控制台
                // console.clear();
            }
        });
    });
    // 手动触发首页加载
    $(".bar-item").first().trigger("click");
});