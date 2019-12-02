
(function () {
    // 判断用户是否登陆，如果没有登陆，则跳转至登陆页面
    if(!sessionStorage.getItem("loginUser")) {
        location.href = "login-register.html";
    }


    // 倒计时
    let targetDate  = new Date("January, 25, 2020");
    let currentDate = new Date();
    let aTimeItems  = document.querySelectorAll('.time-item');
    let minus    = 0,
        day      = 0,
        hours    = 0,
        minutes  = 0,
        seconds  = 0,
        times    = null;
    let t = setInterval(function () {
        currentDate = new Date();
        minus = targetDate - currentDate;
        if(minus < 0) {
            clearInterval(t);
            return;
        }
        day     = Math.floor(minus / 1000 / 60 / 60 / 24);
        hours   = Math.floor(minus / 1000 / 60 / 60 % 24);
        minutes = Math.floor(minus / 1000 / 60 % 60);
        seconds = Math.floor(minus / 1000 % 60);

        day     = day    <  10 ? "0" + day     : day;
        hours   = hours   < 10 ? "0" + hours   : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        times = [day, hours, minutes, seconds];
        for(let i = 0; i < aTimeItems.length; i++) {
            aTimeItems[i].textContent = times[i];
        }
    }, 1000);
    //  当刷新/关闭当前窗口的时候清除临时存储的用户信息
    window.onbeforeunload = function() {
        sessionStorage.removeItem("loginUser");
    }


})();