var model = {
    user: {
        nikename: "追风少年"
    },
    actiongroup: [
        ["设置个人资料", "收货地址管理", "修改密码"],
        ["我的订单", "我的评价"],
        ["商品收藏", "店铺收藏", "浏览记录"]
    ]
};
new Vue({
    el: "#app",
    data: model,
    mounted() {
        // 判断登陆状态
        if(!sessionStorage.loginState) {
            location.href = `../pages/login-register.html${location.hash}`;
        }
    },
    methods: {
        // 点击注销按钮
        quitBtnClick() {
            // 移除登录状态
            sessionStorage.removeItem("loginState");
            // 跳转到登陆页面
            location.href = `../pages/login-register.html${location.hash}`;
        }
    }
});


