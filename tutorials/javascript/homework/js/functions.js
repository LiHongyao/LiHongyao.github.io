/**
 * Created by LiHongyao on 2017/9/5.
 */

/**
 * 计算
 */
function calculate(firIpt, secIpt, select, callBack) {
    // 异常处理
    if(!judgeValue(firIpt.value, secIpt.value)) {
        return;
    }
    // 获取文本输入框输入的数字
    var firValue = parseInt(firIpt.value);
    var secValue = parseInt(secIpt.value);
    // 获取运算符
    var options = select.options;
    var idx = select.selectedIndex;
    var option = options[idx];
    var operator = option.textContent;

    var result = 0;
    switch(operator) {
        case '+': {
            result = firValue + secValue;
        }break;
        case '-': {
            result = firValue - secValue;
        }break;
        case 'x': {
            result = firValue * secValue;
        }break;
        case '÷': {
            result = firValue / secValue;
        }break;
    }

    // 通过回调函数返回结果
    if(callBack) {
        callBack(result);
    }
}

/**
 * 异常处理
 */
function judgeValue(firValue, secValue) {
    if(!firValue || !secValue || isNaN(firValue) || isNaN(secValue)) {
        return false;
    }
    return true;
}





















