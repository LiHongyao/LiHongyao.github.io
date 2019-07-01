$(function() {
    // 监听用户点击登录按钮
    $(".btn").click(function() {
        // 获取用户输入的账号密码
        let username = $("#username").val();
        let password = $("#password").val();
        // 判断用户是否输入了账号密码
        if(!username || !password) {
            // 提示框
            alert("请输入账号或密码！")
        }else if(username === "admin" && password === "123") {
            alert("登录成功！");
            // 跳转至主页
            location.href = "../index.html";
        }else {
            alert("账号或密码错误！");
        }
    });
});