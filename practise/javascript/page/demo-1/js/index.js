
(function() {
    // 1. 定义变量
    var data       = infos["news"];
        totalPage  = Math.ceil(data.length / 10), // 记录总页数
        curIndex   = 1, // 记录当前页
        oWrap      = getEl(".news-list"), // 内容容器
        oCurPage   = getEl(".curPage"),   // 当前页
        oTotalPage = getEl(".totalPage"), // 总页数
        oUp        = getEl(".up"),
        oDown      = getEl(".down");
    // 2.更新显示
    oTotalPage.textContent = totalPage;
    // 3.加载页面
    loadingHtml(oWrap, data, curIndex);
    // 4.事件
    oUp.onclick = function() {
        if(curIndex == 1) {
            return;
        }else {
            curIndex--;
        }
        loadingHtml(oWrap, data, curIndex);
        oCurPage.textContent = curIndex;
    };
    oDown.onclick = function() {
        if(curIndex == totalPage) {
            return;
        }else {
            ++curIndex;
        }
        loadingHtml(oWrap, data, curIndex);
        oCurPage.textContent = curIndex;
    }
})();


