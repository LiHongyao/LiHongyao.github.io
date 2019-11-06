const {
    url
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
                        content: '教学Org获取用户信息需要您的授权！',
                        showCancel: false,
                        confirmText: '去设置',
                        success: function(res) {
                            wx.navigateTo({
                                url: '../auth/auth'
                            });
                        }
                    })
                } else {
                    wx.showLoading({
                        title: '加载中...',
                        mask: true
                    })
                    wx.login({ 
                        success: function(res) {
                            if (res.code) {
                                // 获取临时登录凭证
                                // 将code传入后台获取用户的openid/session_key
                                wx.request({
                                    url: `${url}/login`,
                                    data: {
                                        code: res.code
                                    },
                                    method: 'POST',
                                    success: function(res) {
                                        // 记录登录用户
                                        _this.globalData.loginUser = res.data.data;
                                        // 获取购物车数据
                                        wx.request({
                                            url: `${url}/shopping_cart?username=${res.data.data.username}`,
                                            success: function(response) {
                                                // 赋值购物车数据
                                                _this.globalData.shoppingCart = response.data.data;
                                                wx.hideLoading();
                                            }
                                        })
                                    },
                                })
                            } else {
                                console.log("登录失败", res.errMsg);
                            }
                        }
                    })
                }
            }
        })
    },
    onHide() {
        let {
            shoppingCart
        } = this.globalData;
        // 处理图片路径
        let arr = shoppingCart.map(item => {
            return Object.assign({ ...item
            }, {
                imgUrl: /.+\/(.+)/.exec(item.imgUrl)[1]
            })
        });
        // 上传购物车数据至服务器
        if (arr.length > 0) {
            wx.request({
                url: `${url}/shopping_cart/insert`,
                data: {
                    list: arr
                },
                method: 'POST',
                success: function(res) {}
            });
        }
    },
    // 全局数据
    globalData: {
        shoppingCart: [], // 购物车
        loginUser: {}
    },

});

/**
 * # 微信登录
 * 1. 授权
 * 2. wx.login 换取临时登录凭据（登录）
 * 3. 从后台获取用户 openid（username）
 * # 登录接口
 * 接口地址：/login
 * 登录类型：'普通'||'微信'
 */
