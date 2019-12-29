// pages/feedback/feedback.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // => Events 
    handleBtnTap() {
        wx.showModal({
            title: '温馨提示',
            content: '我们已经收到您的反馈，请勿重复提交！',
            showCancel: false,
            confirmText: '确定'
        })
    }
})