(function() {
    // 1. 加载页面元素
    loadingMenus(model);
    loadingAbout(model);
    loadingTeam(model);
    loadingServices(model);
    loadingNews(model);
    loadingGallery(model);

    // 2. 交互设计
    // 2.1 点击搜索显示输入控件
    $(".search-img").click(() => {
        $(".search > input").toggleClass("show").focus();
    });

})();