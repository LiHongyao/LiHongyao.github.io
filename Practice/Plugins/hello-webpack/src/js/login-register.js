import '../less/login-register.less';


// 记录状态
let _isLogin = true;

$('input').on('change', function () {
    // 表单验证
    let reg = new RegExp($(this).data('reg'));
    if (reg.test($(this).val())) {
        $(this).parent().removeClass('err');
    } else {
        $(this).parent().addClass('err');
    }
});

// 点击前往注册
$('.go-register').on('click', function () {
    _isLogin = false;
    $('form')[0].reset();
    document.title = "PROJ - 注册";
    $('.title').text('REGISTER');
    $('.btn').text('注册');
    $(this).css({
        display: 'none'
    });
    $('.register').css({
        display: 'block'
    })
});
// 点击返回登录
$('.go-login').on('click', function () {
    _isLogin = true;
    $('form')[0].reset();
    document.title = "PROJ - 登录";
    $('.title').text('LOGIN');
    $('.btn').text('登录');
    $('.go-register').css({
        display: 'block'
    });
    $('.register').css({
        display: 'none'
    })
});


// 点击登录-注册
$('.btn').click(function () {
    if (_isLogin) {
        // 登录 - localStorage
        alert('登录成功！');
        sessionStorage.LOGIN_USER = {
            username: '木子李'
        };
        location.href = '../../index.html';
    } else {
        // 注册 - localStorage
        alert('注册成功！');
        sessionStorage.LOGIN_USER = {
            username: '木子李'
        };
        location.href = '../../index.html';
    }

});


