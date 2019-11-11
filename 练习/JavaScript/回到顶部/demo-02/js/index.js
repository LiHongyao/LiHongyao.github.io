(function() {
    // 获取DOM元素
    var oBtn   = document.querySelector('.gotop-btn');
    // 监听页面滚动
    window.onscroll = function() {
        // 获取页面滚动的距离
        var offset = document.documentElement.scrollTop || document.body.scrollTop;
        // 当页面滚出500px的时候，显示回到顶部按钮
        if(offset > 500) {
            oBtn.style.display = "block";
        }else {
            oBtn.style.display = "none";
        }
    }
    // 监听点击
    oBtn.onclick = function() {
        // 回到顶部
        window.scrollTo({
            left: 0,
            top : 0,
            behavior: "smooth"
        })
    }
})();