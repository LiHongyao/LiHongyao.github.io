$(function() {
    // 1. 加载页面
    loaddingHtml(function() {
        // 2. 交互
        $(".group-list .box").click(function() {
            $(this).toggleClass("sel").next().slideToggle();
        })
    })
});