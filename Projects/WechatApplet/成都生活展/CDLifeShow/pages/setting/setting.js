// pages/setting/setting.js
Page({
    data: {
        funcs: [{
            "icon": "../../assets/changePSW.png",
            "text": "修改密码"
        }]
    },
    // => Events
    handleItemTap() {
        
    },
    handleExitTap() {
        wx.showModal({
            title: '温馨提示',
            content: '您确定要退登陆么？退出登录将无法浏览其他页面！',
            showCancel: true,
            confirmColor: '',
            success: function(res) {
                if (res.confirm) {
                    wx.reLaunch({
                        url: '../login/login'
                    })
                }
            }
        })

    }

})