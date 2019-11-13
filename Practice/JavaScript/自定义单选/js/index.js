let colors = [...document.querySelectorAll(".colors .item")];
let sizes  = [...document.querySelectorAll(".size .item")];
let button = document.querySelector("button");

let color_sel_index = null;
let size_sel_index  = null;

let order = {};

colors.forEach(color => {
    color.onclick = function() {
        // 清除效果
        if(color_sel_index != null) {
            colors[color_sel_index].classList.remove("sel");
        }
        // 设置效果
        this.classList.add("sel");
        // 更新下标
        color_sel_index = colors.indexOf(this);
        // 更新订单
        order.color = this.textContent;
    }
});


sizes.forEach(size => {
    size.onclick = function() {
        // 清除效果
        if(size_sel_index != null) {
            sizes[size_sel_index].classList.remove("sel");
        }
        // 设置效果
        this.classList.add("sel");
        // 更新下标
        size_sel_index = sizes.indexOf(this);
        // 更新订单
        order.size = this.textContent;
    }
});


button.onclick = function() {
    console.log(order);
    // 将订单添加至数据库中对应的购物车那张表
}