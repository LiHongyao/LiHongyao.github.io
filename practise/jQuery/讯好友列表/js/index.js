$(function() {
    // 数据加载
    get((response) => {
        // 加载元素
        loadingHtml(response);
        // 动画效果
        $(".group-name").on("click", function(e) {
            let $target = $(e.currentTarget);
            let $friendlist = $target.next();
            // 隐藏/显示好友列表
            $friendlist.slideToggle("fast");
            // 切换可见状态
            $friendlist.toggleClass("visible");
            // 根据可见状态旋转图片
            if($friendlist.hasClass("visible")) {
                $target.find(".arrow").addClass("rotate");
            }else {
                $target.find(".arrow").removeClass("rotate");
            }
        });
    })

});