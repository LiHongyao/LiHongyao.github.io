let model = {
    isRegister: false,
    account: "",
    password: "",
    nikename: "",
    tel: "",
    email: "",
    alert: null
};
new Vue({
    el: "#app",
    data: model,
    mounted() {
        // 注册Bmob服务
        Bmob.initialize("54d2defa1ff5920ab2e7a789e110013a", "5bf7ab5621c5fbc737cd1e9875c8edef");
    },
    methods: {
        // 登陆/注册页面切换
        tabBtnClick(e) {
            let $target = $(e.target);
            this.isRegister = $target.attr("data-flag") == "login" ? false : true;
            $(".login-register-btn").text($target.text());
            $target.addClass("selected").siblings().removeClass("selected");
            // 清空输入框
            this.clearInput(); 
        },
        // 点击登陆/注册按钮
        loginRegisterBtnClick() {
            if(this.isRegister) { // 注册
                this.register();
            }else { // 登陆
                this.login();
            }
        },
        // 清空文本输入框内容
        clearInput() {
            this.account  = "";
            this.password = "";
            this.nikename = "";
            this.tel      = "";
            this.email    = "";
        },
        // 登陆
        login() {  
            if(!this.judge()){
                // 提示用户完善信息
                new LHYAlertView({
                    type: "alert",
                    message: "请输入账号或密码！"
                });
                return;
            };
            this.showTips();
            let _this = this;
            Bmob.User.logIn(this.account, this.password, {
                success: function(user) {
                    // 隐藏
                    _this.alert.close();
                    new LHYAlertView({
                        type: "alert",
                        message: "登陆成功！",
                        sureCallBack: () => {
                            // 切换登陆状态
                            sessionStorage.loginState = true;
                            // 跳转到主页
                            location.href = "../index.html#home";
                        }
                    });  
                },
                error: function(user, error) {
                    _this.alert.close();
                    new LHYAlertView({
                        type: "alert",
                        message: "用户名不存在或密码错误！"
                    });
                }
            });

        },
        // 注册
        register() {
            if(!this.judge()){
                // 提示用户完善信息
                new LHYAlertView({
                    type: "alert",
                    message: "请完善信息再进行注册！"
                });
                return;
            };
            this.showTips();
            let _this = this;
            // 构建用户对象
            let user = new Bmob.User();
            // 配置用户对象
            user.set("username", this.account);
            user.set("password", this.password);
            user.set("email", this.email);
            user.set("phone", this.tel);
            user.set("nikename", this.nikename);
            // 注册用户
            user.signUp(null, {
                success: function(user) {
                    _this.alert.close();
                    new LHYAlertView({
                        type: "alert",
                        message: "恭喜您，注册成功！",
                        sureCallBack: () => {
                            // 切换登陆状态
                            sessionStorage.loginState = true;
                            // 跳转到主页
                            location.href = "../index.html#home";
                        }
                    })            
                },
                error: function(user, error) {
                    let errorMsg = "";
                    switch(error.code) {
                        case 202: {
                            errorMsg = "用户名已经被注册！";
                        }break;
                        case 203: {
                            errorMsg = "邮箱已经被注册！";
                        }break;
                        case 209: {
                            errorMsg = "手机已经被注册！";
                        }break;
                        default: {
                            errorMsg = "注册失败！请检查注册信息！";
                        }
                    }
                    _this.alert.close();
                    new LHYAlertView({
                        type: "alert",
                        message: errorMsg
                    });

                }
            });
        },
        // 判断输入框是否为空
        judge() {
            let isThrough = true;
            let $inputs = $(".form-item input");
            for(let i = 0, len = $inputs.length; i < len; i++) {
                // 如果输入框内容为空
                if($inputs.eq(i).val() == "") {
                    isThrough = false;
                    // 跳出循环
                    break;
                }
            }
            return isThrough;
        },
        // 显示登陆/注册中提示框
        showTips() {
            this.alert = new LHYAlertView({
                type: "default",
                message: this.isRegister ? "注册中，请稍后..." : "登陆中，请稍后..."
            });
        }
    }
});
