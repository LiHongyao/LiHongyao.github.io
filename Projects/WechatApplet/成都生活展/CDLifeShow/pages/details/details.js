import { URL } from "../../utils/util.js";
Page({
    data: {
        URL,
        imgs: [],
        des: ""
    },
    onLoad: function(options) {
        // 读取传递过来的数据
        let {
            imgs,
            des
        } = JSON.parse(options.data);
        // 异常处理
        if(typeof imgs === "string") {
            imgs = [imgs];
        }
        // 赋值数据
        this.setData({
            imgs,
            des
        })
    }
})