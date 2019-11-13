const CAR_KEY = "shopping_car";

class Car {
    constructor() {}
    // 增
    static add(order) {
        let orders = [];
        // 如果本地存在购物车字段
        // 则根据本地购物车来初始化orders
        if(localStorage[CAR_KEY]) {
            orders = JSON.parse(localStorage[CAR_KEY]);
        }
        // 将新订单加入购物车
        orders.push(order);
        // 更新本地数据
        localStorage[CAR_KEY] = JSON.stringify(orders);
    }
    // 删
    static remove(index) {
        // 获取购物车数据
        let orders = JSON.parse(localStorage[CAR_KEY]);
        // 删除对应的订单
        orders.splice(index, 1);
        // 更新本地数据
        localStorage[CAR_KEY] = JSON.stringify(orders);
    }
    // 清空
    static clear() {
        localStorage[CAR_KEY] = JSON.stringify([]);
    }
    // 改
    static modify(index, newOrder) {
         // 获取购物车数据
         let orders = JSON.parse(localStorage[CAR_KEY]);
         // 替换要修改的数据
         orders.splice(index, 1, newOrder);
         // 更新本地数据
         localStorage[CAR_KEY] = JSON.stringify(orders);
    }
    // 查
    static query(callback) {
        let res = null;
        if(localStorage[CAR_KEY]) {
            let orders = JSON.parse(localStorage[CAR_KEY]);
            res    = orders.length == 0 ? false : orders;
        }else {
            res    = false ;
        }
        callback && callback(res);
    }
}
