// 如果没有登陆，跳转至登陆页面
if(!sessionStorage.LOGIN_USER) {
    location.href = "../pages/login.html";
}
let logionUser = JSON.parse(sessionStorage.LOGIN_USER);
alert(`Welcome ${logionUser.username} !`);
