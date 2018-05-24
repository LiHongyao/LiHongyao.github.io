

(function(){
    // 获取DOM元素
    let gotopBtn = document.querySelector(".gotop-btn");
    // 绑定回到顶部功能
    scrollToTop({
        el: gotopBtn,
        pageScroll: (offset) => {
            gotopBtn.style.display = offset > 600 ? "block" : "none";
        },
        complete: () => {
            console.log("页面已经回到顶部！");
        }
        
    });
})();
