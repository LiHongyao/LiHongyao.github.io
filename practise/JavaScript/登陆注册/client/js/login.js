// 1. 获取元素
let checkbox = document.querySelector("[type=checkbox]");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#login-btn");

// 2.如果用户上次登陆记住了账号密码
// 则本次打开页面需导出用户信息给输入框
if(localStorage.LOC_USER) {
    let user = JSON.parse(localStorage.LOC_USER);
    username.value = user.username;
    password.value = user.password;
    checkbox.checked = true;
}

// 3. 登陆
loginBtn.onclick =function(){
    let user = {
        username: username.value,
        password: password.value
    };
    if(!user.username || !user.password) {
        alert("请输入账号或密码！");
        return;
    }
    fetch("http://127.0.0.1:8081/user/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        switch(data.status) {
            case "200":{
                alert("登陆成功！");
                // 判断是否记住账号密码
                if(checkbox.checked) {
                    localStorage.LOC_USER = JSON.stringify(user);
                }else {
                    localStorage.removeItem("LOC_USER");
                }
                sessionStorage.LOGIN_USER = JSON.stringify(data.user);
                location.href = "../index.html";
            }break;
            case "202": {
                alert("用户名不存在！");
            }break;
            case "203": {
                alert("密码错误！");
            }break;
        }
    })
}