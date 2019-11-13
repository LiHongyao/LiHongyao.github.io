(function() {
    // 1. 更新行高，让文本垂直居中
    let keys = Array.from(document.querySelectorAll('.keys'));
    updateLineHieght(keys);
    // 2. 获取DOM元素
    let result    = document.querySelector('.result');
    let numbers   = Array.from(document.querySelectorAll('.number'));
    let handlers  = Array.from(document.querySelectorAll('.handler'));
    let operators = Array.from(document.querySelectorAll('.operator'));
    let firNumber = 0, secNumber = 0, symbol = "";
    // 记录是否清除结果显示,重新录入数字
    let flag      = false;
    // 记录计算次数
    let times     = 0;

    // 3. 事件添加
    // 3.1 点击数字
    numbers.forEach(number => {
        number.onclick = function() {
            let [resultText, numberText] = [result.textContent, this.textContent];
            // 如果结果中已经存在一个‘.’，既不能再次输入‘.’
            if(/\./.test(resultText) && numberText === ".") {
                return;
            }
            // 如果输入的第一个字符不是‘.’，则清空结果
            if((resultText === "0" && numberText !== ".") || flag) {
                resultText = "";
            }
            resultText += this.textContent;
            result.textContent = resultFormat(resultText);
            flag = false;
        }
    });
    // 3.2 处理操作
    handlers.forEach(handler => {
        handler.onclick = function()  {
            removeClass(operators, 'selected');
            switch(this.textContent) {
                // 清空结果
                case "AC":{
                    // 涅槃重生
                    times = 0;
                    firNumber = secNumber = 0;
                    clearResult(result);
                }break;
                // 正负数
                case "+/-": {
                    conversion(result);
                }break;
                // 百分比
                case "%": {
                    percentage(result);
                }break;
            }
        }
    });
    // 3.3 处理运算
    operators.forEach(operator => {
        operator.onclick = function() {
            if(this.textContent === "=") {
                // 计算
                // 判断如果重复点击等号，则更新第一个值
                if(symbol && times) {
                    firNumber = parseFloat(result.textContent.replace(/,/g, ""));
                }
                removeClass(operators, 'selected');
                // 如果是第一次点击等号，则更新第二个值
                if(!times) {
                    secNumber = parseFloat(result.textContent.replace(/,/g, ""));
                }
                caculator({firNumber, secNumber, symbol, result});
                times++;
            }else {
                // 记录运算符号
                symbol = this.textContent;
                // 移除选种样式
                removeClass(operators, 'selected');
                // 添加选中样式
                this.classList.add('selected');
                // 记录第一个数字
                firNumber = parseFloat(result.textContent.replace(/,/g, ""));
                // 更新flag状态
                flag = true;
                // 清空次数
                times = 0;
            }
        }
    });
})();


