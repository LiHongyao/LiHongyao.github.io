$(function() {
    // 向后台服务器发送一个数据请求
    $.ajax({
        url: "http://www.wwtliu.com/sxtstu/blueberrypai/getIndexInteresting.php",
        success: (res) => {
            console.log(res);
        }
    });

    // 点击回到顶部的图标
    $("aside .list > li").last().click(function() {
        // 触发回到顶部效果
       $("html, body").animate({
           scrollTop: 0
       }, 500);
    });
});