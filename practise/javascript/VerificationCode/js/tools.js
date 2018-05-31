
/**
 * 
 * @description  获取随机验证码
 * @param length String 验证码长度
 * @return       String 随机字符
 */
function getVerificationCode(length) {
    // 定义随机源
    var str = "";
    str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    str += "1234567890";
    str += "qwertyuiopasdfghjklzxcvbnm";
    // 根据长度截取字符
    var resStr = "";
    for(var i = 0; i < length; i++) {
        // 获取随机下标
        var index = Math.floor(Math.random() * str.length);
        resStr += str.slice(index, index + 1);
    }
    return resStr;
}


