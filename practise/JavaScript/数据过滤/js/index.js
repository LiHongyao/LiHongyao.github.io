(function() {
    // 获取分类信息
    var goodsList = document.querySelector('.goods-list');
    var colors    = Array.from(document.querySelectorAll('.colors .keywords'));
    var kinds     = Array.from(document.querySelectorAll('.kinds .keywords'));
    var origin    = Array.from(document.querySelectorAll('.origin .keywords'));
    // 记录过滤的关键词
    var keywords  = { color: "", origin: "", kind: ""};
    // 获取数据
    GET("../json/goods.json", function(response) {
        // 异步加载
        loadingGoodsList(goodsList, response, keywords);
        // 事件添加
        colors.forEach(function(colorItem, index) {
            colorItem.onclick = function() {
                // 清除样式
                removeClass(colors, "selected");
                // 添加样式
                this.classList.add('selected');
                keywords.color = this.textContent === "全部" ? "" : this.textContent;
                loadingGoodsList(goodsList, response, keywords);
            }
        });
        kinds.forEach(function(kindItem, index) {
            kindItem.onclick = function() {
                // 清除样式
                removeClass(kinds, "selected");
                // 添加样式
                this.classList.add('selected');
                keywords.kind = this.textContent === "全部" ? "" : this.textContent;
                loadingGoodsList(goodsList, response, keywords);
            }
        });
        origin.forEach(function(originItem, index) {
            originItem.onclick = function() {
                // 清除样式
                removeClass(origin, "selected");
                // 添加样式
                this.classList.add('selected');
                keywords.origin = this.textContent === "全部" ? "" : this.textContent;
                loadingGoodsList(goodsList, response, keywords);
            }
        });
    });
})();
