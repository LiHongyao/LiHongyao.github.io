const app = getApp();
const {url} = require("../../utils/util.js")
Page({
    data: {
        shoppingCart:[],
        slideButtons: [{
            type: 'warn',
            text: '删除'
        }],
        total: 0, // 商品结算总价
        selArr: [], // 记录选中的项
        isAllSel: false
    },
    onShow() {
        let shoppingCart = app.globalData.shoppingCart;
        // 为所有购物车数据添加选中状态
        shoppingCart.forEach(item => {
            item.checked = false;
        });
        this.setData({
            shoppingCart
        })
    },
    // => events 
    // 左滑删除
    slideButtonTap(event) {
        let { shoppingCart, selArr } = this.data;
        let { index } = event.target.dataset;
        // 删除选中集合中的数据项
        let order = shoppingCart[index];
        // 判断当前数据是否选中
        if(order.checked) {
            // 如果选中，则获取其在选中集合中的下标位置
            let i = selArr.indexOf(order);
            // 删除
            selArr.splice(i, 1);
        }
        // 删除购物车
        shoppingCart.splice(index, 1);
        this.setData({
            selArr,
            shoppingCart
        });
        // 计算总价
        this.calcTotal();
    },
    // 删除全选
    handleAllDelete() {
        let {selArr, shoppingCart} = this.data;
        selArr.forEach(order => {
            let index = shoppingCart.indexOf(order);
            shoppingCart.splice(index, 1);
        });
        selArr = [];
        this.setData({
            selArr,
            shoppingCart
        })
        // 计算总价
        this.calcTotal();
    },
    handleCounterChange(event) {
        let { shoppingCart } = this.data;
        let { num } = event.detail;
        let { index } = event.target.dataset;
        this.setData({
            [`shoppingCart[${index}].num`]:num,
            [`shoppingCart[${index}].total`]:num * shoppingCart[index].price
        });
        // 计算总价
        this.calcTotal();
    },
    // 点击单选
    handleItemRadioTap(event) {
        let { shoppingCart, selArr } = this.data;
        let { index } = event.target.dataset;
        // 获取用户点击的对应的订单信息
        let order = shoppingCart[index];
        let checked = !order.checked;
        // 判断选中的状态
        // 如果选中，则添加进selArr
        // 否则，从selArr删除对应的数据项
        if(checked) {
            selArr.push(order);
        }else {
            let i = selArr.indexOf(order);
            selArr.splice(i, 1);
        }
        // 判断是否全部选中
        let isAllSel = shoppingCart.length == selArr.length; 
        this.setData({
            selArr,
            isAllSel,
            [`shoppingCart[${index}].checked`]: checked
        });
        // 计算总价
        this.calcTotal();

    },
    // 点击全选
    handleAllSelRadioTap(event) {
        let {isAllSel, shoppingCart, selArr } = this.data;
        isAllSel = !isAllSel;
        shoppingCart.forEach(item => {
            item.checked = isAllSel;
        });
        selArr = [];
        if(isAllSel) {
            selArr = [...shoppingCart];
        }
        // 更新数据
        this.setData({
            isAllSel,
            selArr,
            shoppingCart
        });
        // 计算总价
        this.calcTotal();
    },
    // => methods
    calcTotal() {
        let {selArr} = this.data;
        let total = 0;
        selArr.forEach(order => {
            total += order.total;
        });
        this.setData({
            total
        });
    }

});