import {
    URL
} from "../../utils/util.js";
Page({
    data: {
        URL,
        data: {}
    },

    onLoad: function(options) {
        wx.request({
            url: `${URL}/recommend`,
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                this.setData({
                    data: res.data
                });
            }
        })
    },
    // => Events
    handleItemTap(event) {
        let {
            imgs,
            des
        } = event.currentTarget.dataset;
        wx.navigateTo({
            url: "../details/details?data=" + JSON.stringify({
                imgs,
                des
            })
        })
    }
})