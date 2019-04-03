(function() {
    // 1. 随机验证码
    var oSpan = $('.verification-code-box > span')
    oSpan.textContent = getVerificationCode(7);
    oSpan.onclick = function() {
        oSpan.textContent = getVerificationCode(7);
    }
    // 2. 表单验证
    var valObj = {
        "username":"",
        "firPassword":"",
        "secPassword":"",
        "email":"",
        "tel":"",
        "verificationCode":""
    };
    var inputs = Array.from($('.myForm input', true));
    inputs.forEach(function(input) {
        // 实时验证
        input.oninput = function() {
            // this -> 
            var val  = this.value;
            var flag = false;
            // 存储表单输入的数据
            valObj[this.id] = val;
            switch(this.id) {
                case "username": {
                    // 只能包含字母、数字、下划线且字符个数不少于5个不多于10个
                    if(/^\w{5,10}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "firPassword": {
                    // 只能包含字母、数字、下划线、*，且不少于6个字符不多于10个字符
                    if(/^[\w*]{6,10}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "secPassword": {
                    if(val === valObj.firPassword) {
                        flag = true;
                    }
                } break;
                case "email": {
                    if(/^\w+@[A-Za-z\d]+\.(com|cn)$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "tel": {
                    // 匹配1[3456789]号码段
                    if(/^1[3-9]\d{9}$/.test(val)) {
                        flag = true;
                    }
                } break;
                case "verificationCode": {
                    var reg = new RegExp(oSpan.textContent, "i");
                    if(reg.test(val)) {
                        flag = true;
                    }
                } break;
            }
            // 判断是否显示异常提示
            if(flag) {
                this.parentElement.classList.remove("error");
            }else{
                this.parentElement.classList.add("error");
            }
        }
    });
    // 点击注册
    $(".btn").onclick = function() {
        // 1. 判断信息是否完善
        var flag = true;
        // 获取对象所有的key值
        var keys = Object.keys(valObj);
        for(var i = 0, len = keys.length; i < len; i++) {
            if(!valObj[keys[i]]) {
                flag = false;
                break;
            }
        }
        if(!flag)  {
            alert("请完善信息！");
            return ;
        }
        // 2. 判断是否合法
        var isThrough = true;
        for(var j = 0, len = inputs.length; j < len; j++) {
            
            if(inputs[j].parentElement.classList.contains("error")) {
                isThrough = false;
                break; 
            }
        }
        if(!isThrough) {
            alert("输入信息不合法，请检查格式！");
            return ;
        }
        // 3. 执行注册逻辑
        alert("注册中...");
    }
})();