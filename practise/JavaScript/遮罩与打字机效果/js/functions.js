function effectOfTyping(element, str, interval) {
    // 异常处理
    if(!element || !str) {
        throw 'Error: Lack the necessary parameters of function \'effectOfTyping\'.';
    }
    // 清空元素文本内容
    element.textContent = '';
    // 设置默认的时间间隔
    interval = interval || 100;
    // 定义下标，用于记录当前打印字符的位置
    let curIdx = 0;
    // 设置定时器，逐帧打印字符
    let t = setInterval(() => {
        // 判断：如果当前打印字符位置等于字符串长度，则表示打印完毕，清除定时器
        if(curIdx === str.length) {
            clearInterval(t);
        }else {
            // 逐帧打印
       	    element.textContent += str.charAt(curIdx++);
        }
    }, interval);
}