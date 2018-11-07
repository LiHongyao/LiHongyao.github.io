$(function() {
    let _isLogin = true;
    // 1. 点击前往注册
    $('.go-register').on('click', function() {
        $('.register').removeClass('hidden');
        $('.login').addClass('hidden');
        $('.login-register-btn').text("注册");
        _isLogin = false;
    });
    // 2. 点击返回登陆
    $('.go-login').on('click', function() {
        $('.register').addClass('hidden');
        $('.login').removeClass('hidden');
        $('.login-register-btn').text("登陆");
        _isLogin = true;
    });
    // 3. 表单验证
    $('.input-box input').on('input', function() {
        let type = this.className;
        if(Validate.test(type, $(this).val())) {
            // 合法
            $(this).parent().removeClass('error');
        }else {
            // 不合法
            $(this).parent().addClass('error');
        }
    });
    // 4. 点击登陆注册按钮
    $('.login-register-btn').on('click', function() {
        let isThrough = true;
        let $inputs   = $(".input-box input");
        // 表单异常处理
        for(let i = 0, len = $inputs.length; i < len; i++) {
            if(!$inputs.eq(i).val() || $inputs.eq(i).parent().hasClass('error')) {
                isThrough = false;
                break;
            }
        }
        if(!isThrough) {
            alert("信息为空或信息不合法！");
            return;
        }
        if(_isLogin) {
            // 登陆
        }else {
            // 注册Bmob服务
            Bmob.initialize("6585b447362f4076d0e9c0f1609032e7", "6cbe6de9df1818b31f39c5de28b833e3");
            // 创建用户对象
            let user = {};
            $inputs.each((index, input) => {
                let key = $(input).attr('class');
                let val = $(input).val();
                user[key] = val;
            });
            // 调用BMOB注册用户
            Bmob.User.register(user).then(res => {
                console.log(res)
            }).catch(err => {
               console.log(err)
            });
        }
    });
});







