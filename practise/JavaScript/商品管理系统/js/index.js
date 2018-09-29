(function(){

    // 1. 获取DOM元素
    var mask      = document.querySelector('.mask');
    var closeBtn  = document.querySelector('.close-btn');
    var addBtn    = document.querySelector('.add-btn');
    var sureBtn   = document.querySelector('.sure-btn');
    var inputs    = Array.from(document.querySelectorAll('.mask input'));
    var searchIpt = document.querySelector('.search-input');
    var goods     = {};
    // 2. 处理遮罩的显示与隐藏
    addBtn.onclick = function() {
        clearInputsVal();
        mask.classList.add("show");
        sureBtn.dataset.editing = false;
        sureBtn.textContent = "确认添加";
    }
    closeBtn.onclick = function() {
        mask.classList.remove("show");
    }
    // 3. 模糊搜索
    searchIpt.oninput = function() {
        var keywords = this.value;
        loadingGoodsList(keywords);
    }
    // 4. 监听输入框的变化
    sureBtn.onclick = function() {
        // 1. 判断输入框是否为空，如果为空，则终止后续操作
        var isEmpty = false;
        for(var i = 0, len = inputs.length; i < len; i++) {
            if(inputs[i].value.length == 0) {
                isEmpty = true;
                break;
            }
        }
        if(isEmpty) {
            new LHYAlertView({
                type: "alert",
                message: "请完善商品信息!!!",
            });
            // 终止后续操作
            return;
        }
        // 2. 生成商品
        inputs.forEach(function(input, index){
            if(index == 0) {
                goods[input.id] = `GN ${input.value}`;
            }
            goods[input.id] = input.value;
        });
        var date = new Date();
        goods.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        var message = "";
        if(this.dataset.editing === "true") {
            // 获取编辑下标
            var index = this.dataset.index;
            // 修改本地数据
            var goodsList = JSON.parse(localStorage.goodsList);
            goodsList[index] = goods;
            localStorage.goodsList = JSON.stringify(goodsList);
            // 刷新页面显示
            loadingGoodsList();
            message = "编辑成功！";
        }else {
            save(goods);
            loadingGoodsList();
            message = "添加成功！";
        }   
        new LHYAlertView({
            message: message,
            autoClose: 500
        })
        mask.classList.remove("show");
    }


    // 4. 加载默认数据
    loadingGoodsList();
    // loadingDefaultsDatas();

})();
