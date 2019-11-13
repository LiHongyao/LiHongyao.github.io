function loadingDefaultsDatas() {
    var d     = new Date();
    var date  = d.toLocaleDateString() + " " +  d.toLocaleTimeString();
    var goodsList = [
        {num: "1001", name: "iPhone X", kind: "手机", store: "120", price: "88888", des: "三网通 128G", date:date},
        {num: "1002", name: "OPPO R21", kind: "手机", store: "218", price: "3299", des: "三网通 128G", date:date},
        {num: "1003", name: "Macbook Pro", kind: "电脑", store: "312", price: "13400", des: "固态硬盘 26G 办公 休闲", date:date},
        {num: "1004", name: "钓鱼台", kind: "香烟", store: "31", price: "1000", des: "条", date:date}
    ];
    localStorage.goodsList = JSON.stringify(goodsList);
}
function save(goods) {
    var goodsList = null;
    // 判断本地是否存在商品列表
    // 如果存在，则根据本地商品初始化
    // 否则，直接初始化一个空的数组
    if(localStorage.goodsList) {
        goodsList = JSON.parse(localStorage.goodsList);
    }else {
        goodsList = [];
    }
    goodsList.push(goods);
    localStorage.goodsList = JSON.stringify(goodsList);
}
function remove(index){
    // 获取本地数据
    var goodsList = JSON.parse(localStorage.goodsList);
    goodsList.splice(index, 1);
    localStorage.goodsList = JSON.stringify(goodsList);
}
function clearInputsVal() {
    var inputs = Array.from(document.querySelectorAll('.mask input'));
    inputs.forEach(function(input) {
        input.value = "";
    });
}
function sliceStr(str, len) {
    if(str.length > len) {
        return str.slice(0, len) + '...';
    }else {
        return str;
    }
}

function isTips(str, len) {
    if(str.length > len) {
        return 'td tips';
    }else {
        return 'td';
    }
}

function loadingGoodsList(keywords) {
    var goodsWrap = document.querySelector('.goods-list');
    // 判断商品是否存在
    var flag = false;
    // 如果商品存在goodsList键，并且商品数量大于1个，才表示有数据
    if(localStorage.goodsList && JSON.parse(localStorage.goodsList).length > 0 ) {
        flag = true;
    }
    // 处理商品不存在情况
    if(!flag) {
        goodsWrap.innerHTML = `<li class="no-goods">暂无数据，请添加...</li>`;
    }else {
        // 获取所有的商品
        var goodsList = JSON.parse(localStorage.goodsList);
        // 处理搜索数据
        if(keywords) {
            goodsList = goodsList.filter(function(goods) {
                console.log(JSON.stringify(goods));
                var reg = new RegExp(keywords, "i");
                return reg.test(JSON.stringify(goods));
            }) 
        }
        // 拼接元素
        var htmlStr = "";
        goodsList.forEach(function(goods, index) {
            htmlStr += `
                <li class="row">
                    <span class="td">${index + 1}</span>
                    <span class="td">${goods.num}</span>
                    <span class="${isTips(goods.name, 9)}" data-show="${goods.name}">${sliceStr(goods.name, 9)}</span>
                    <span class="${isTips(goods.kind, 9)}" data-show="${goods.kind}">${sliceStr(goods.kind, 9)}</span>
                    <span class="td">${goods.store}</span>
                    <span class="td">${goods.price}</span>
                    <span class="${isTips(goods.des, 9)}" data-show="${goods.des}">${sliceStr(goods.des, 9)}</span>
                    <span class="td">${goods.date}</span>
                    <span class="td">
                        <span data-index=${index} class="btn edit-btn">编辑</span>
                        <span data-index=${index} class="btn delete-btn">删除</span>
                    </span>
                </li>`;
        });
        goodsWrap.innerHTML = htmlStr;
        // 处理用户点击删除按钮
        handleDeleteBtn();
        // 处理用户点击编辑按钮
        handleEditBtn();
    }
}
function handleEditBtn() {
    // 获取编辑按钮
    var editBtns = Array.from(document.querySelectorAll('.edit-btn'));
    editBtns.forEach(function(editBtn){
        editBtn.onclick = function() {
            // 获取下标
            var index  = this.dataset.index;
            // 显示遮罩
            var mask = document.querySelector('.mask');
            mask.classList.add('show');
            var sureBtn = document.querySelector('.sure-btn');
            sureBtn.textContent = "确认编辑";
            sureBtn.dataset.editing = true;
            sureBtn.dataset.index =  index;
            // 获取编辑商品
            var goods  = JSON.parse(localStorage.goodsList)[index];
            // 赋值输入框
            var inputs = Array.from(document.querySelectorAll('.mask input'));
            inputs.forEach(function(input) {
                input.value = goods[input.id];
            });
        }
    });
}

function handleDeleteBtn() {
    // 获取删除按钮
    var deleteBtns = Array.from(document.querySelectorAll('.delete-btn'));
    deleteBtns.forEach(function(deleteBtn) {
        deleteBtn.onclick = function() {
            var _this = this;
            new LHYAlertView({
                type: "confirm",
                message: "您确定要删除该商品信息吗？",
                sureCallBack: function() {
                    // 获取要删除元素的下标
                    var index = _this.dataset.index;
                    // 从本地删除
                    remove(index);
                    // 刷新页面
                    loadingGoodsList();
                    new LHYAlertView({
                        message: "删除成功！",
                        autoClose: 500
                    })
                }
            })     
        }
    });
}