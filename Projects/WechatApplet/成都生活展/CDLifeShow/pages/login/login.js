import {
    URL
} from "../../utils/util.js";

Page({

    data: {
        URL,
        username: "",
        password: "",
        className: ""
    },
    // => Events
    handlegGoRegisterBtnTap() {
        wx.navigateTo({
            url: '../register/register'
        })
    },
    handleLoginBtnTap(event) {
        // 解构数据
        let {
            username,
            password
        } = this.data;
        // 判断是否输入账号密码
        if (!username || !password) {
            wx.showToast({
                title: '请输入账号或密码!',
                icon: 'none',
                duration: 1000
            })
            return;
        }
        // 读取本地数据
        let users = {};
        if (wx.getStorageSync("users")) {
            users = JSON.parse(wx.getStorageSync("users"));
        }
        // 判断用户是否存在
        if (!users[username]) {
            wx.showToast({
                title: '用户不存在!',
                icon: 'none',
                duration: 1000
            });
        } else {
            // 读取用户
            let user = users[username];
            // 判断用户输入的账号密码是否匹配
            if (username === user.username && password === user.password) {
                wx.showToast({
                    title: '登陆成功!',
                    icon: 'none',
                    duration: 1000,
                    success() {
                        // 跳转至主页
                        wx.switchTab({
                            url: '../home/home'
                        })
                    }
                });
            }else {
                wx.showToast({
                    title: '账号或密码错误！',
                    icon: 'none',
                    duration: 1000
                });
            }
        }
    },
    handleInput(event) {
        // 获取id值
        let key = event.target.id;

        // 更新数据
        this.setData({
            [key]: event.detail.value
        })
        // 按钮效果
        let {
            username,
            password
        } = this.data;
        let className = username && password ? "ok" : " ";
        this.setData({
            className
        })
    }

})