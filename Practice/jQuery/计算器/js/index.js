$(function () {

    // 1. 变量定义
    let $res = $("#res");
    let firNum = 0; // 第1个数字
    let secNum = 0; // 第2个数字
    let operator = "";// 记录运算符
    let equalClickTimes = 0; // 记录等号点击的次数
    let isEnterNewNum = true;



    // 2. 点击数字
    $(".num").click(function () {
        // 判断是否复位
        if (equalClickTimes) {
            firNum = secNum = equalClickTimes = 0;
            operator = "";
        }
        // 如果是要输入新的数字，则重置res
        if (isEnterNewNum) { $res.text(0); }
        // 读取结果数据
        let res = $res.text();
        let val = $(this).text();
        // 避免重复点击点
        if (/\./.test($res.text()) && val === ".") return;
        // 拼接数据
        res += val;
        // 如果输入的是整数并且第一个字符是0，则直接去掉0
        if (/^0/.test(res) && !/\./.test(res)) res = res.slice(1);
        // 更新显示数字
        $res.text(res);
        // 如果运算符存在，更新第2个数字，否则更新第1个数字
        if (operator) {
            secNum = $res.text();
        } else {
            firNum = $res.text();
        }
        // 移除运算符的效果
        $(".operator").removeClass("selected");
        isEnterNewNum = false;
    });
    // 3. 点击运算符
    $(".operator").click(function () {
        // 设置点击效果
        $(this).addClass("selected").siblings().remove("selected");
        // 如果两个数字都存在，并且上一次点击的是等号，则直接运算
        if (!equalClickTimes && firNum && secNum) {
            calc({
                firNum, secNum, operator,
                callback: function (res) {
                    $res.text(res);
                    firNum = res;
                }
            })
        }
        // 赋值运算符
        operator = $(this).text();
        // 点击运算符之后需要输入新的数字
        isEnterNewNum = true;
        // 点击运算符之后，将点击等号的次数置为0，避免点击了等号再点击运算符无效的情况
        equalClickTimes = 0;

    });
    // 4. 点击等号
    $(".equal").click(function () {
        if (!secNum) { return; }
        // 执行运算
        calc({
            firNum, secNum, operator,
            callback: function (res) {
                $res.text(res);
                firNum = res;
            }
        })
        equalClickTimes++;
        // 点击等号之后需要输入新的数字
        isEnterNewNum = true;
    });

    // 5. 点击AC、+-、%
    $(".handler").click(function () {
        switch ($(this).text()) {
            // AC -> 复位
            case "AC": {
                firNum = secNum = equalClickTimes = 0;
                operator = "";
                $res.text(0);
            } break;
            case "+/-": {
                let val = $res.text() * -1;
                $res.text(val);
                firNum = val;
            } break;
            case "%": {
                // let val = parseFloat($res.text());
                // if(firNum && secNum) {
                //     val = firNum * secNum;
                // }

                $res.text(parseFloat($res.text()) / 100);
                firNum = $res.text();
                // secNum = 0;
            } break;
        }
    });
});

