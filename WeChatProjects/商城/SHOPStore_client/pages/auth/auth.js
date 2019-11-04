import {
    url
} from "../../utils/util.js"
const app = getApp();
Page({
    // => events
    getUserInfo(event) {
        wx.getSetting({
            success(res) {
                // console.log("res", res)
                if (res.authSetting['scope.userInfo']) {
                    wx.login({
                        success: function(res) {
                            if (res.code) {
                                // 获取用户信息
                                wx.request({
                                    url: `${url}/login`,
                                    data: {
                                        code: res.code
                                    },
                                    method: 'POST',
                                    success: function(res) {
                                        app.globalData.loginUser = res.data.data;
                                        // 获取购物车数据
                                        wx.request({
                                            url: `${url}/shopping_cart?username=${res.data.data.username}`,
                                            success: function(response) {
                                                // 赋值购物车数据
                                                app.globalData.shoppingCart = response.data.data;
                                                // 上一页
                                                wx.navigateBack({
                                                    delta: 1,
                                                })
                                            }
                                        })
                                    },
                                })
                            } else {
                                console.log("登录失败", res.errMsg);
                            }
                        }
                    })
                } else {
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