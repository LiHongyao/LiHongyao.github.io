(function(){
    var oContainer = document.querySelector("#page-box");
    new LHYPage({
        container: oContainer, // 容器
        curPage: 4, // 当前第几页
        allPage: 12, // 总页数
        callBack: function(curPage) { // 切换回调
            console.log(curPage);
            // 数据请求...
            // 异步加载...
        }
    });
})();