

(function(){
    var oHeader    = document.querySelector("header");
    var offset     = 0,
        lastOffset = 0;

    window.onscroll = function(e) {
        // 更新偏移量
        offset = document.documentElement.scrollTop || document.body.scrollTop;
        // 往上拉/显示菜单
        if(offset < lastOffset) {
            oHeader.classList.remove("menu-hidden");
        }else {
            oHeader.classList.add("menu-hidden");
        }
        lastOffset = offset;
    }
})();