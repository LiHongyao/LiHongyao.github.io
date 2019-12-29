import { URL } from "../../utils/util.js";
Page({
    data: {
        URL,
        data: {}
    },

    onLoad: function (options) {
        wx.request({
            url: `${URL}/home`,
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                this.setData({
                    data: res.data
                });
            }
        })
    }
})