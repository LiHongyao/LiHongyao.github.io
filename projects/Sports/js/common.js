


(function main() {

    // 获取元素
    let $personalCenList = $('.personal-cen-list');
    // 记录显示个人中心的状态
    let isShowPersonCen = false;

    // 点击个人中心
    $('#personal-cen').on('click', function () {
        if(sessionStorage.loginUser) {
            isShowPersonCen = !isShowPersonCen;
            if(isShowPersonCen) {
                $personalCenList.css({"display":"block"});
            }else {
                $personalCenList.css({"display":"none"});
            }
        }else {
            location.href = 'login-register.html';
        }
    });
    // 点击个人中心-安全退出
    $('#exit-btn').on('click', function () {
        sessionStorage.loginUser = "";
        $personalCenList.css({"display":"none"});
        isShowPersonCen = false;
    });



    // 回到顶部
    scrollToTop($('.goTop').get(0), 1000);


})();