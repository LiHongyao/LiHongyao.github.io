class ShoppingCart {
    // 添加
    static insert(order, callback) {
        let rootArr = [];
        // 如果本地存在订单数据，则根据本地数据更新rootArr
        if(localStorage.orders) {
            rootArr = JSON.parse(localStorage.orders);
        }
        // 将当前订单加入数据集合
        rootArr.push(order);
        // 更新本地数据
        localStorage.orders = JSON.stringify(rootArr);
        // 如果存在回调函数则调用回调函数
        callback && callback();
    }
    // 删除
    static remove() {

    }
    // 清空
    static clear() {

    }
    // 修改
    static modify() {

    }
    // 查询
    static query(callback) {
        // 判断是否存在数据
        if(localStorage.orders && JSON.parse(localStorage.orders).length > 0) {
            // 将购物车数据通过回调函数传递出去
            callback && callback(JSON.parse(localStorage.orders));
        }else {
            // 如果数据不存在，我们直接传递空
            callback && callback(null);
        }
    }
};

