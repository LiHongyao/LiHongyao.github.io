

let model = {
    book: (function(){
        return sessionStorage.bookinfos ? JSON.parse(sessionStorage.bookinfos) : {};
    })()
}

new Vue({
    el: "#app",
    data: model,
    mounted() {
        
    },
    methods: {
        // 点击按钮
        btnClick(e) {
            // 判断用户是否登陆
            if(!sessionStorage.loginState) {
                location.href = "../pages/login-register.html#bookdetails";
                return;
            }
            let $target = $(e.target);
            // 判断是立即购买还是加入购物车
            if($target.hasClass("buy")) {
                this.buy();
            }else {
                this.insertShoppingCar();
            }
        },
        // 立即购买
        buy() {
            console.log("立即购买！");
        },
        // 加入购物车
        insertShoppingCar() {
            // 购物车对象
            let shoppingcar = null;
            // 判断本地是否已经存在购物车
            // 存在，则根据本地购物车初始化新的购物车
            // 不存在，则直接创建新的购物车
            if(localStorage.shoppingcar) {
                shoppingcar = JSON.parse(localStorage.shoppingcar);
            }else {
                shoppingcar = [];
            }
            // 判断购物车是否已经存在当前书本
            let flag = false;
            for(let i = 0, len = shoppingcar.length; i < len; i++) {
                if(shoppingcar[i].name == this.book.name) {
                    flag = true;
                    break;
                }
            }
            if(flag) {
                new LHYAlertView({
                    type: "alert",
                    message: "购物车已存在该商品！"
                })
                return;
            }
            // 将本书加入到购物车
            shoppingcar.push(this.book);
            // 更新本地购物车
            localStorage.shoppingcar = JSON.stringify(shoppingcar);
            // 弹框提示
            new LHYAlertView({
                type: "alert",
                message: "已添加至购物车！"
            })
        }
    }
});
