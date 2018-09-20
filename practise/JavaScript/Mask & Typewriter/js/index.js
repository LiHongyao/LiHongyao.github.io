(function() {
    // 获取DOM元素
    var oBtn      = document.querySelector('.btn');
    var oMask     = document.querySelector('.mask');
    var oCloseBtn = document.querySelector('.close-btn');
    var oText     = document.querySelector('.text');
    // 添加点击事件
    oBtn.onclick = function() {
        // 显示遮罩
        oMask.classList.add('show');
        effectOfTyping(oText, "从你的全世界路过...", 100);
    }
    oCloseBtn.onclick = function() {
        // 隐藏遮罩
        oMask.classList.remove('show');
    }
})();
