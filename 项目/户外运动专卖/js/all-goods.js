




let model = {
    "infos": all_goods_datas,
    "keyWords": { "color": "","origin": "","classify":""},
    "filterKeys": [[],[],[]],
    "filterList": [],
};
let vm = new Vue({
    el: "#content",
    data: model,
    mounted: function () {
        // 赋值点击过滤关键词集合
        let $infosList = $(".filter-keys-list");
        for(let i = 0; i < $infosList.length; i++) {
            for(let j = 0; j < $infosList[i].children.length; j++) {
                if(j == 0) { continue; }
                this.filterKeys[i][j - 1] = $infosList[i].children[j];
            }
        }
        // 赋值点击过滤关键词列表
        this.filterList = $infosList;
    },
    methods: {
        // 点击筛选数据按钮
        clickFillters: function (event) {

            let $target = $(event.target);
            let idx     = $target.attr("data-idx");
            let lis    = this.filterKeys[idx];
            // 遍历清除上一次选中的样式
            for(let i = 0; i < lis.length; i++) {
                if($(lis[i]).find("a").hasClass("selected")) {
                    $(lis[i]).find("a").removeClass("selected");
                    break;
                }
            }
            // 定义选中的样式
            $target.addClass("selected");


            // 过滤词
            let _this = this;
            switch($(_this.filterList[idx]).attr("data-keys")) {
                case "classify" : {
                    if($target.text() == "全部") {
                        _this.keyWords.classify = "";
                    }else {
                        _this.keyWords.classify = $target.text();
                    }
                } break;
                case "origin": {
                    if($target.text() == "全部") {
                        _this.keyWords.origin = "";
                    }else {
                        _this.keyWords.origin = $target.text();
                    }
                } break;
                case "color": {
                    if($target.text() == "全部") {
                        _this.keyWords.color = "";
                    }else {
                        _this.keyWords.color = $target.text();
                    }
                } break;
            }
        },
        // 筛选数据
        fillterArr: function (datas) {
            // . ：匹配除回车换行以外的所有字符
            // * ：匹配0次货多次
            let regStr = `/.*${this.keyWords.classify}.*${this.keyWords.origin}.*${this.keyWords.color}.*/`;
            // eval() 可将字符串转为正则表达式
            let reg = eval(regStr);
            return datas.filter(function (data) {
                return reg.test(JSON.stringify(data));
            });
        }
    }
});















