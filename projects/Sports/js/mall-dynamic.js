
(function main() {
    // model
    let model = {
        // 菜单标题集合
        "menuTitles": ["全部资讯", "店铺动态", "店长博客"],
        // 菜单子标题集合
        "subTitles": ["All News", "Store Dynamic", "Manager Blogs"],
        // 过滤key集合
        "fillterKeys": ["", "storeDynamic", "managerBlog"],
        // 数据集合
        "infos": mall_dynamic_datas,
        // 主标题
        "mainTitle": "全部资讯",
        // 子标题
        "subTitle": "All News",
        // 搜索过滤关键字
        "keyWords": "",
        // 当前选中菜单下标
        "selectedIdx": 0
    };
    // viewModel
    let vm = new Vue({
        el: "#content",
        data: model,
        mounted: function () {
            this.animations();
            window.onscroll();
        },
        methods: {
            clickMenu: function (event) {
                let $targetEl    = $(event.target);
                this.mainTitle   = $targetEl.text();
                this.subTitle    = $targetEl.attr("data-subTitle");
                this.keyWords    = $targetEl.attr("data-keyWords");
                this.selectedIdx = $targetEl.attr("data-idx");

                // 刷新动画
                let lis = $("#dynamic-list li");
                for(let i = 0; i < lis.length; i++) {
                    lis[i].classList.remove("animation");
                    setTimeout(function () {
                        lis[i].classList.add("animation");
                    }, 0);
                }
            },


            filterArr: function (infos) {
                let _this = this;
                return infos.filter(function (info) {
                    // 模糊查询
                    let reg = new RegExp(_this.keyWords);
                    return reg.test(info.keyWords);
                })
            },

            animations: function () {
                let wHeight = window.innerHeight;
                let offset  = 0;
                let lis     = null;

                // 监测页面滚动
                window.onscroll = function () {
                    lis = $(".dynamic-list li");
                    // 当页面滚动时，更新内容滚动的高度
                    offset = document.body.scrollTop || document.documentElement.scrollTop;
                    // 遍历列表项
                    for(let i = 0; i < lis.length; i++) {
                       2  // 获取对应列表项在内容中所处的位置
                        let offsetTop = lis[i].offsetTop;
                        // 当可视内容高度与滚出内容高度大于列表项在内容中所处的位置
                        // 即当列表项出现时（滚动至列表项时），执行动画
                        if(wHeight + offset > offsetTop) {
                            lis[i].classList.add("move");
                        }else {
                            lis[i].classList.remove("move");
                        }
                    }
                }
            }
        }
    });
})();









