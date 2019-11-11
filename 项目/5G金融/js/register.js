$(function() {
    // 监听用户点击注册按钮
    $(".register-btn").click(function() {
        // 异常处理
        // 如果昵称/手机号/验证码/密码为空，注册失败
        if(!$(".nikename").val() || !$(".tel").val() || !$(".code").val() || !$(".password")) {
            alert("请完善注册信息！");
            // 终止后续操作
            return ;
        }
        // 如果勾选阅读同意协议，注册失败
        if(!$(".agree").prop("checked")) {
            alert("请阅读并同意网站的使用条例和隐私说明！");
            // 终止后续操作
            return;
        }
        // 判断昵称是否合法
        if(!validation($(".nikename").val(), "nikename")) {
            alert("昵称不合法！")
            return;
        }
        // 判断手机号是否合法
        if(!validation($(".tel").val(), "tel")) {
            alert("手机号码不合法！")
            return;
        }
        // 判断密码是否合法
        if(!validation($(".password").val(), "password")) {
            alert("密码不合法！")
            return;
        }
        // 如果以上都满足条件，则直接注册用户
        // 创建用户对象
        let user = {
            // 昵称
            nikename: $(".nikename").val(),
            // 手机号
            tel: $(".tel").val(),
            // 密码
            password: $(".password").val()
        };
        // 将用户存入本地，下一次打开网页的时候，可直接通过注册的用户进行登录
        // 注意：这里只能注册一个用户/暂不考虑实现多用户注册
        // 将用户存入本地或者临时存储需通过JSON.stringify()将对象转换成JSON字符串
        // 要查看存在本地的数据，请鼠标右键检查选中Application选项查看localStorgae
        localStorage.user = JSON.stringify(user);
        // 注册成功之后，直接跳转至主页，并在主页显示登录用户的昵称
        // 跳转之前，先通过sessionStorage临时存储登陆状态，用于在页面中判断用户是否登陆
        // 要查看存在临时存储的数据，请鼠标右键检查选中Application选项查看sessionStorage
        sessionStorage.loginUser = JSON.stringify(user);
        alert("恭喜您，注册成功！");
        location.href = "../index.html";
    });
});