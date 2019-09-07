
function calc(options) {
    // 1. 读取数据
    let { firNum, secNum, operator, callback } = options;
    console.log(`${firNum}${operator}${secNum}`);
    firNum = parseFloat(firNum);
    secNum = parseFloat(secNum);
    // 2. 执行运算
    let res = 0;
    switch (operator) {
        case "+": {
            res = firNum + secNum;
        } break;
        case "-": {
            res = firNum - secNum;
        } break;
        case "x": {
            res = firNum * secNum;
        } break;
        case "÷": {
            res = firNum / secNum;
        } break;
    }
    // 3. 返回结果
    callback && callback(res);
}