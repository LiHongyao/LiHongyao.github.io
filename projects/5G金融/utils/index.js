// 工具函数


function validation(str, type) {
    switch (type) {
        // 验证用户名：只能包含中文、字母、数字、下划线，3~8个字符
        case "nikename": 
            return /^[\u4e00-\u9fa5\w]{3,8}$/.test(str);
        // 验证手机号码：以13、14、15、16、18、19开头的11为手机号
        case "tel":
            return /^1[345689]\d{9}$/.test(str);
        // 验证密码：6~10位的字母、数字、下划线以及*
        case "password":
            return /^[\w\*]{6,10}$/.test(str);
        default:
            return false;
    }
}