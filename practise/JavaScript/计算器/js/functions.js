// 计算行高
function updateLineHieght(keys) {
    let _height = keys[0].offsetHeight;
    keys.forEach(key => {
        key.style.lineHeight = `${_height}px`;
    });
}

// 调整结果字符串格式
function resultFormat(str) {
    if(str === "错误") {
        return str;
    }
    var s = "";
    if(/\d+\.0*/.test(str)) {
        return str;
    }
    str = str.replace(/,/g, "");
    if(!/^0/.test(str)  ) {
        return parseFloat(str).toLocaleString();
    }
    return str;
}

// 清除结果
function clearResult(el) {
    el.textContent = "0";
}
// 正负转换
function conversion(el) {
    var val = el.textContent;
    if(/^-/.test(val)) { // 如果是负数
        val = val.slice(1);
    }else { // 如果是正数
        val = `-${val}`;
    }
    el.textContent = val;
}
// 百分比（结果除以100）
function percentage(el) {
    let val = el.textContent;
    if(val === "0") {return;}
    val = val.replace(/,/g, "");
    if(/^0\./.test(val)) {
        // 解决因js浮点数除以100的异常问题
        let index = val.indexOf('.') + 1;
        val = "0.00" + val.slice(index);
        el.textContent = val;
    }else if(/^-0\./.test(val)){
        let index = val.indexOf('.') + 1;
        val = "-0.00" + val.slice(index);
        el.textContent = val;
    }else {
        el.textContent = val / 100;
    }
    
}

function removeClass(elements, className) {
    for(let i = 0, len = elements.length; i < len; i++) {
        if(elements[i].classList.contains(className)) {
            elements[i].classList.remove(className);
            break;
        }
    }
}

function caculator({firNumber, secNumber, symbol, result}) {
    let res = null;
    switch(symbol) {
        case "+":{
            res = firNumber + secNumber;
        }break;
        case "-":{
            res = firNumber - secNumber;
        }break;
        case "×": {
            res = firNumber * secNumber;
        }break;
        case "÷": {
            if(secNumber == 0) {
                res = "错误";
            }else {
                res = firNumber / secNumber;
            }
        }break;
    }
    result.textContent = resultFormat(res.toString());
}