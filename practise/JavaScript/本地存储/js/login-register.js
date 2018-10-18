


(function () {
    // 获取DOM元素
    let title         = document.querySelector("#title");
    let loginPage     = document.querySelector("#login-page");
    let registerPage  = document.querySelector("#register-page");
    let goLoginBtn    = document.querySelector("#go-login-btn");
    let goRegisterBtn = document.querySelector("#go-register-btn");
    let registerBtn   = document.querySelector("#register-btn");
    let registerActIpt= document.querySelector("#register-act-ipt");
    let registerPswIpt= document.querySelector("#register-psw-ipt");

    let loginForm     = document.querySelector("#login-form");
    let registerForm  = document.querySelector("#register-form");

    let loginBtn      = document.querySelector("#login-btn");
    let loginActIpt   = document.querySelector("#login-act-ipt");
    let loginPswIpt   = document.querySelector("#login-psw-ipt");
    let checkBox      = document.querySelector("#checkbox");

    // 判断用户上次登陆是否保存了用户信息
    // 如果保存了用户则设置默认账号密码
    let user = JSON.parse(localStorage.getItem("loginUser"));
    if(user) {
        loginActIpt.value = user.username;
        loginPswIpt.value = user.password;
        checkBox.checked  = true;
    }


    // 登陆
    loginBtn.onclick = function () {
        let user = {
            username: loginActIpt.value,
            password: loginPswIpt.value
        }
        login("users", user, function (status) {
            let msg = null,
                isLogin = false;
            switch (status) {
                case 0: {
                   msg = "用户不存在！";
                } break;
                case 1: {
                   msg = "请输入账号或密码！";
                } break;
                case 2: {
                   msg = "账号或密码错误，请重新输入！";
                } break;
                case 200: {
                   msg = "恭喜您，登陆成功！";
                   isLogin = true;
                } break;
            }
            new LHYAlertView({
                "id": "alert-box",
                "message": msg,
                "sureCallBack": function () {
                    if(isLogin) {
                        checkBox.checked ? saveUserInfo(user) : removeUserInfo();
                        sessionStorage.setItem("loginUser", JSON.stringify(user));
                        location.href = "index.html";
                    }
                }
            })
        });
    }
    // 注册
    registerBtn.onclick = function () {
        let user = {
            username: registerActIpt.value,
            password: registerPswIpt.value
        };
        if(!user.username || !user.password) {
            new LHYAlertView({
                "id": "alert-box",
                "message": "请完善注册信息！"
            });
        }else if(determineUserIsExists("users", "username", user.username)){
            new LHYAlertView({
                "id": "alert-box",
                "message": "用户已存在！"
            });
        }else {
            registerUser("users", user, function () {
                new LHYAlertView({
                    "id": "alert-box",
                    "message": "注册成功！",
                    "sureCallBack" : function () {
                        sessionStorage.setItem("loginUser", JSON.stringify(user));
                        location.href = "index.html";
                    }
                });
            });
        }
    }
    // 前往登陆
    goLoginBtn.onclick = function () {
        title.textContent = "LOGIN";
        loginPage.classList.add("page-show");
        registerPage.classList.remove("page-show");
        document.title = "PROJ - 登陆"
        registerForm.reset();
    }
    // 前往注册
    goRegisterBtn.onclick = function () {
        title.textContent = "REGISTER";
        loginPage.classList.remove("page-show");
        registerPage.classList.add("page-show");
        document.title = "PROJ - 注册";
        if(!checkBox.checked) {
            loginForm.reset();
        }
    }




})();








