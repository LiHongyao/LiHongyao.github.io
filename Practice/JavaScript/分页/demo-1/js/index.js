(function() {
    var _infos     = null;
    var _curPage   = 1;
    var _totalPage = 1;
    var oCurPage   = getEl(".cur-page");

    // 请求数据
    ajax({
        url: "../json/data.json",
        success(res) {
            _infos = res;   
            // 处理分页显示
            _totalPage = Math.ceil(res.length / 10);
            getEl(".total-page").textContent = _totalPage;
            
            // 异步加载
            loadingInfos(_infos, _curPage, _totalPage);
        }
    });
    // 添加事件
    getEl(".prev").onclick = tab;
    getEl(".next").onclick = tab;

    function tab() {
        if(!_infos) {return;}
        _curPage = this.id == "prev" ? (_curPage == 1 ? 1  : _curPage - 1) : (_curPage == 5  ? 5 : _curPage + 1);
        // 更新页码
        oCurPage.textContent = _curPage;
        loadingInfos(_infos, _curPage, _totalPage);
    }
   
})();