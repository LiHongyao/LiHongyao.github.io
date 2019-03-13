

(function main() {

    // 获取元素
    let $pages = $('.login-register-page');

    let $registerAcctIpt   = $('#register-acct');
    let $registerPswIpt    = $('#register-psw');
    let $registerCfmPswIpt = $('#register-cfm-psw');
    let $registerCheckBox  = $('#agreement-checkbox');

    let $loginAcctIpt  = $('#login-acct');
    let $loginPswIpt   = $('#login-psw');
    let $loginCheckBox = $('#remember-checkbox');

    let $registerForm = $('.registerForm');

    let usersKey = "SPORT_GOODS_USERS";

    // 判断用户是否保存账号信息
    if(localStorage.loginUser) {
        let loginUser = JSON.parse(localStorage.loginUser);

        $loginAcctIpt.val(loginUser.username);
        $loginPswIpt.val(loginUser.password);
        $loginCheckBox.prop("checked", true);
    }


    // 点击跳转注册
    $('.login .go-register-btn').on('click', function () {
        $($pages[0]).removeClass('show');
        $($pages[1]).addClass('show');
        $("#login-register-title").text("注册");
        $("title").text("户外运动专卖 | 注册");
    });
    // 点击已有账号跳转登陆
    $('.register .go-login-btn').on('click', function () {
        $($pages[1]).removeClass('show');
        $($pages[0]).addClass('show');
        $registerForm.get(0).reset();
        $("#login-register-title").text("登录");
        $("title").text("户外运动专卖 | 登录");
    });
    // 注册用户
    $('.register .register-btn').on('click', function () {
        // 表单验证
        if(!$registerAcctIpt.val() || !$registerPswIpt.val() || !$registerCfmPswIpt.val()) {
            alert("请填写完整信息！");
        }else if($registerPswIpt.val() !== $registerCfmPswIpt.val()) {
            alert("两次密码输入不一致，请重新输入！")
        }else if(!$registerCheckBox.is(":checked")){
            alert("请阅读并勾选同意《用户手册》和《保密条款》！");
        }else if(determineUserIsExists(usersKey, "username", $registerAcctIpt.val())) {
            alert("用户已经存在，请重新注册！");
        }else {
            let user = {
                "username":$registerAcctIpt.val(),
                "password":$registerPswIpt.val()
            }
            // 注册用户
            registerUser(usersKey, user , function () {
               let cfmResult = confirm("注册成功，是否记住用户信息？");
               if(cfmResult) {
                   saveUserInfo(user);
               }else {
                   removeUserInfo();
               }
               sessionStorage.loginUser = JSON.stringify(user);
               location.href = "index.html";
            });
        }
    });
    // 用户登陆
    $('.login .login-btn').on('click', function () {
        login(usersKey, {
            "username": $loginAcctIpt.val(),
            "password": $loginPswIpt.val()
        }, function (status, user) {
           switch(status) {
               case 0: {
                   alert("用户不存在！");
               }break;
               case 1: {
                   alert("账号或密码为空，请重新输入！");
               }break;
               case 2: {
                   alert("账号或密码错误，请重新输入！");
               }break;
               case 200: {
                   alert("恭喜您，登陆成功！");
                   if($loginCheckBox.is(":checked")) {
                       saveUserInfo(user);
                   }else {
                       removeUserInfo();
                   }
                   sessionStorage.loginUser = JSON.stringify(user);
                   location.href = "index.html";
               }break;
           }
        });
    })
})();


