$(function() {
    // 数据加载
    get((response) => {
        // 加载元素
        loadingHtml(response);
        // 动画效果
        $(".group-name").on("click", function(e) {
            let $target = $(e.currentTarget);
            let $friendlist = $target.next();
            $friendlist.slideToggle("fast");
            $friendlist.toggleClass("visible");
            if($friendlist.hasClass("visible")) {
                $target.find(".arrow").addClass("rotate");
            }else {
                $target.find(".arrow").removeClass("rotate");
            }
        });
    })
});