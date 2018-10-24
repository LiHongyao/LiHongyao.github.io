class ShoppingCart {
    // 添加
    static insert(order, callback) {
        let rootArr = [];
        // 如果本地存在订单数据，则根据本地数据更新rootArr
        if(localStorage.orders) {
            rootArr = JSON.parse(localStorage.orders);
        }
        // 重复商品处理
        let flag = false;
        for(let i = 0, len = rootArr.length; i < len; i++) {
            if(rootArr[i].bookNum == order.bookNum) {
                rootArr[i].num = rootArr[i].num + 1;
                rootArr[i].total = (rootArr[i].num * rootArr[i].price).toFixed(2);
                flag = true;
                break;
            }
        }
        if(!flag) {
            rootArr.push(order);
        }
        // 更新本地数据
        localStorage.orders = JSON.stringify(rootArr);
        // 如果存在回调函数则调用回调函数
        callback && callback();
    }
    // 删除
    static remove(indexs) {
        // 获取购物车订单
        let orders = JSON.parse(localStorage.orders);
        let tmpArr = [];
        // 遍历购物车所有数据
        for(let i = 0, len1 = orders.length; i < len1; i++) {
            // 记录是否要将不删除的购物车数据存放至临时数组中
            let flag = false;
            // 遍历删除下标
            for(let j = 0, len2 = indexs.length; j < len2; j++) {
                // 判断购物车数据的下标和要删除的数据的下标是否匹配
                // 如果匹配，则表示这个数据要被删除
                // 就不用添加到临时数组中
                if(i == indexs[j]) {
                    flag = true;
                }
            }
            // 如果该数据下标没有对应要删除的数据下标，
            // 那么就将该数据存储到临时数组中即可
            // 整个循环结束之后，临时数据集合里面的数据就都是保留下来的数据了
            if(!flag) {
                tmpArr.push(orders[i]);
            }
        }
        // 更新本地购物车
        localStorage.orders = JSON.stringify(tmpArr);
    }
    // 修改
    static modify(index, order) {
        // 获取购物车订单
        let orders = JSON.parse(localStorage.orders);
        // 修改对应下标的订单
        orders[index] = order;
        // 更新本地购物车
        localStorage.orders = JSON.stringify(orders);
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

