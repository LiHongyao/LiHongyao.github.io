

(function() {
    // 获取存储验证码元素
    var validateCode = document.querySelector(".validate-code");
    var input = document.querySelector("input");
    var inputBox = document.querySelector(".input-box");
    // 设置默认验证码
    validateCode.textContent = getVerificationCode(6);
    // 点击验证码/切换
    validateCode.onclick = function() {
        validateCode.textContent = getVerificationCode(6);
    }
    // 判断验证码是否输入正确
    input.onblur = function() {
        // 根据验证码生成正则表达式
        // i 忽略大小写
        var reg = new RegExp(`^${validateCode.textContent}$`, "i");
        // 通过正则表达式判断验证码是否输入正确
        if(!reg.test(this.value)) {
            inputBox.classList.remove("hidden");
        }else {
            inputBox.classList.add("hidden");
        }
    }
 
})();