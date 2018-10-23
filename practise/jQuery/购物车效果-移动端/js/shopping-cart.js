$(function() {
    // 读取购物车
    ShoppingCart.query((orders) => {
        // 判断购物车是否有数据
        if(orders) { // 有数据
            console.log(orders);
        }else {  // 没数据
            $(".content").html("<p class='no-order'>o(╥﹏╥)o，购物车为空~</p>");
        }
    });
    // 处理全选
    $('.check-box').click(function() {
        $(this).find(".check-item").toggleClass('checked');
    });
});