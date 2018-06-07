
(function(){
    var oContainer = document.querySelector("#page-box");
    var page = new LHYPage({
        container: oContainer,
        curPage: 5,
        allPage: 10,
        callBack: function(curPage) {
            console.log(curPage);
        }
    });
})();

