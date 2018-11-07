$(function() {
    // 判断是否登陆
    if(!sessionStorage.isLogin) {
        location.href = "../pages/login-register.html";
    }
});