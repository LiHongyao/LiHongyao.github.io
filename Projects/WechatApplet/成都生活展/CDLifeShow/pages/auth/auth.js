Page({
    // => events
    getUserInfo(event) {
        wx.getSetting({
            success(res) {
                // 如果授权获取用户信息则返回上一页
                if (res.authSetting['scope.userInfo']) {
                    // 上一页
                    wx.navigateBack({
                        delta: 1,
                    })
                } else { // 否则提示用户必须授权才能继续
                    wx.showModal({
                        title: '温馨提示',
                        content: '您需授权才能继续！',
                        confirmText: '去设置',
                        showCancel: false
                    })
                }
            }
        })
    }
})