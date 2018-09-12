


$(function(){
    // 记录登陆/注册
    let isLogin   = true;

    location.hash = "login";
    // 注册BMOB服务
    Bmob.initialize("fd07c578d218755126d0b0967e2348df", "90c8c9c41bd02559960f941d393b1787");
    
    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".title").text("REGISTER");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "BMOB - REGISTER";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".title").text("LOGIN");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "BMOB - LOGIN";
    });

    // 判断注册输入内容是否合法
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) { // 登陆
            if(!$(".username").val() || !$(".password").val()) {
                console.log("请完善信息！");
            }else {
                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "登陆成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "../index.html";
                            }
                        });  
                    },
                    error: (user, error) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "用户名不存在或密码错误！",
                        }); 
                    }
                });
            }
        }else { // 注册
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {    
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;  // 跳出each遍历
                }  
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                console.log("请完善信息！");
            }else if(!isThough) {
                console.log("信息不合法！");
            }else {
                // 注册用户
                // 创建用户
                let user = new Bmob.User();
                // 设置用户属性
                user.set("username", $(".username").val());
                user.set("password", $(".password").val());
                user.set("email", $(".email").val());
                user.set("phone", $(".tel").val());
                // 执行注册
                user.signUp(null, {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "注册成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "../index.html";
                            }
                        });  
                    },
                    error: (user, error) => {
                        // alert(`Error: ${error.code} ${error.message}`);
                        let alertMsg = "";
                        switch(error.code) {
                            case 202: {
                                alertMsg = "用户名已存在！";
                            } break;
                            case 203: {
                                alertMsg = "邮箱已被注册！";
                            } break;
                        }
                        new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            title: "温馨提示",
                            message: alertMsg
                        });
                    }
                });
            }

        }
    });
});




