$(function() {
    // 切换登陆
    // 点击tab菜单项
    $(".tab-menu-list li").click(function() {
        // 修改选中状态
        // this 指向用户点击的菜单项
        $(this).addClass("sel").siblings().removeClass("sel");
        // 获取用户点击的菜单项的下标
        let index = $(this).index();
        // 根据下标呈现显示的内容
        $(".tab-ct-list li").eq(index).addClass("show").siblings().removeClass("show");
    });

    // 监听用户点击登陆按钮
    $(".login-btn").click(function() {
        // 异常处理
        // 判断用书是否输入账号或密码
        if(!$(".account").val() || !$(".password").val()){
            alert("请输入账号或密码！");
            return;
        }
        // 判断用户名是否存在，有两种可能
        // 本地数据不存在user对象 或者（||） 本地数据存在user对象但是用户输入的账号和之前注册的账号不匹配
        // 注意：这里账号只考虑手机号码登陆
        if(!localStorage.user || JSON.parse(localStorage.user).tel != $(".account").val()) {
            alert("用户不存在，请前往注册！")
            return;
        }
        // 用户存在，则直接判断密码是否正确
        // 获取存在本地的用户
        let user = JSON.parse(localStorage.user);
        // 判断账号密码是否匹配
        if($(".account").val() === user.tel && $(".password").val() === user.password) {
            alert("登陆成功！");
            // 保存登陆用户
            sessionStorage.loginUser = JSON.stringify(user);
            // 跳转至主页
            location.href = "../index.html";
        }else {
            alert("密码错误，请重新输入！");
        }
    });

});