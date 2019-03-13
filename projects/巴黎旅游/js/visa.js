$(function() {
    // 处理描述/评论切换
    $(".tab-menu-list li").click(function() {
        // 获取选中菜单下标
        let index = $(this).index();

        $(".tab-ct-list li")
        .eq(index)
        .addClass("show")
        .siblings()
        .removeClass("show");

        $(this)
        .addClass("sel")
        .siblings()
        .removeClass("sel");
    });
    // 加载更多套餐
    let data = Model.GET("setMeal");
    loadingMoreList();

    function loadingMoreList() {
        $(".more-list").html((function() {
            let lis = data.map((item, index) => {
                if(index < 4) {
                    return `<li>
                        <img src="../images/${item.imgUrl}">
                        <p class="title">${item.title}</p>
                    </li>`
                }
                return "";
            });
            return lis.join("");
        })());
    }
});
