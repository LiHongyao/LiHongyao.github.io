

$(function() {
    // 1. 获取数据
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 2. 加载数据
            loadingHtml("goods-content", response);
            // 3. 事件处理
            $(".link").on("click", (e) => {
                let $target = $(e.currentTarget);
                location.href = `../pages/details.html?goods-index=${$target.attr("data-index")}`;
            });
        }
    });
});



