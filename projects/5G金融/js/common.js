// 公共脚本


// 判断用户是否登陆
// 如果用户已经登陆，则显示用户昵称和注销按钮
// 如果用户没有登陆，则显示登陆和注册按钮
// 如果临时存储中存在loginUser字段，则表示用户已经登陆
if(sessionStorage.loginUser)  {
    // 隐藏登陆和注册按钮
    $(".no-login").css({"display":"none"});
    // 显示用户昵称
    // 因为存储用户数据时转换成了JSON，所以要读取数据时需使用
    // JSON.parse()将JSON数据进行解析之后才能正常访问
    debugger
    $('.nikename').text(JSON.parse(sessionStorage.loginUser).nikename);
}else {
    $(".login").css({"display":"none"});
}

// 监听用户点击注销按钮
$(".cancellation").click(function() {
    // 显示与未登录相关的元素
    $(".no-login").css({"display":"inline"});
    // 显示与已经登陆相关的元素
    $('.login').css({"display":"none"});
    // 清除临时存储的登陆状态
    sessionStorage.removeItem("loginUser");
});