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
    handlegGoLoginBtnTap() {
        wx.navigateBack({
            delta: 1,
        });
    },
    handleRegisterBtnTap() {
        // 解构数据
        let {
            username,
            password
        } = this.data;
        // 判断是否输入账号密码
        if(!username || !password) {
            wx.showToast({
                title: '请完善信息!',
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
        if(users[username]) {
            wx.showToast({
                title: '用户已存在!',
                icon: 'none',
                duration: 1000
            });
        }else {
            // 添加用户
            users[username] = {username, password};
            // 存入本地
            wx.setStorageSync("users", JSON.stringify(users));
            // 弹框提示用户注册成功
            wx.showToast({
                title: '注册成功!',
                icon: 'none',
                duration: 1000,
                success() {
                    // 跳转至主页
                    wx.switchTab({
                        url: '../home/home'
                    })
                }
            });
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
        let { username, password } = this.data;
        let className = username && password ? "ok" : " ";
        this.setData({
            className
        })
    }

})