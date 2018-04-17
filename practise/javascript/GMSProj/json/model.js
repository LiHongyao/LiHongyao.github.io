
;(function ($) {
    let _goods = [];
    let Model = function () {
        this.init();
    };
    Model.prototype = {
        // 初始化数据
        init: function () {
            let defultDatas = [
                {
                    "goodsNum":"G1001101",
                    "goodsName":"iPhone X",
                    "goodsType":"手机",
                    "goodsStock":"1216",
                    "goodsPrice":"8188",
                    "goodsTips":"64G",
                    "updatedTime": "2017/12/17 下午3:21:29"
                },
                {
                    "goodsNum":"G1001121",
                    "goodsName":"OPPO R11s Plus",
                    "goodsType":"手机",
                    "goodsStock":"876",
                    "goodsPrice":"3699",
                    "goodsTips":"拍照手机",
                    "updatedTime": "2017/12/17 下午4:51:36"
                },
                {
                    "goodsNum":"G1001108",
                    "goodsName":"Macbook pro",
                    "goodsType":"电脑",
                    "goodsStock":"206",
                    "goodsPrice":"14188",
                    "goodsTips":"216G",
                    "updatedTime": "2017/12/17 下午6:18:55"
                }
            ];
            let goods = JSON.parse(localStorage.getItem('GMS_GOODS'));
            _goods = goods || defultDatas;
        },
        // 获取数据
        get: function () {
            return _goods;
        },
        // 添加数据
        appendWith: function (newGoods) {
            _goods.push(newGoods);
        },
        // 删除数据
        removeWith: function (index) {
            _goods.splice(index, 1);
        },
        // 修改数据
        modifyWith: function (index, newGood) {
            _goods[index] = newGood;
        }
    };
    $.Model = Model;

})(window);








































