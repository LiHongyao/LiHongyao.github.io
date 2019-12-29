const {
    URL
} = require("./utils/util.js");
App({
    onLaunch: function() {
        let _this = this;
        // 判断是否授权
        wx.getSetting({
            success(res) {
                // 没有授权
                if (!res.authSetting["scope.userInfo"]) {
                    // 跳转至授权页
                    wx.showModal({
                        title: '温馨提示',
                        content: '「成都生活展」获取用户信息需要您的授权！',
                        showCancel: false,
                        confirmText: '去设置',
                        success: function(res) {
                            wx.navigateTo({
                                url: '../auth/auth'
                            });
                        }
                    })
                }
            }

        })
    },

    // 全局数据
    globalData: {},

});