/**
 * Created by LiHongyao on 2017/5/15.
 */


{
    // 获取回到顶部按钮
    let oBtn = $.get("#rocket-btn");

    // 调用回到顶部方法
    $.scrollToTop({
        el: oBtn,
        duration: 500,
        pageScroll: function (offset) {
            // 判断偏移的距离，显示回到顶部按钮
            oBtn.style.display = offset > 100 ? 'block' : 'none';
        },
        complete: function () {
            console.log("页面已经回到顶部！");
        }
    });
};















































































































































