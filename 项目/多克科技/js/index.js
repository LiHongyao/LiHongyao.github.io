"use strict";

let data = getData("home");

// 轮播图
let app1 = new Vue({
    // 绑定元素
    el: "#banner",
    // 定义数据
    data: {
        // 记录当前显示图片的下标
        showIndex: 0,
        items: [],
        path: data.path,
        flashInfos: data.flashInfos
    },
    // Vue加载完成
    mounted: function() {
        // 获取DOM元素
        this.items = document.querySelectorAll(".flash-list li");
    },
    // 方法/函数
    methods: {
        // 点击左侧按钮
        prevBtnClick() {
            // 切换显示图片小标
            this.showIndex = this.showIndex == 0 ? 2 : --this.showIndex;
        },
        // 点击右侧按钮
        nextBtnClick() {
            // 切换显示图片小标
            this.showIndex = this.showIndex == 2 ? 0 : ++this.showIndex;
        }
    },
    // 监听数据变化
    watch: {
        showIndex: function(newVal, oldVal) {
           // 给当前显示的li添加show的class
           this.items[newVal].classList.add("show");
           // 移除上一次显示图片的class
           this.items[oldVal].classList.remove("show");
        }
    }
});

// 内容
let app2 = new Vue({
    el: "#content",
    data: {
        path: data.path,
        contents: data.contents
    }
});










