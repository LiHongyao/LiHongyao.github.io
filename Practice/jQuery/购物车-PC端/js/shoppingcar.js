$(function() {

    $(".goHome").click(function() {
        location.href = "../index.html";
    })

    loading();
   

});


function loading(callback) {
     // 查询购物车数据并加载
     Car.query((res) => {
        // 加载购物车
        let htmlStr = "";
        $.each(res, (index, order) => {
            htmlStr += `<li>
                <img src="../images/${order.imgName}" />
                <button type="button" data-index="${index}" class="del-btn">删除订单</button>
                <h3>${order.title}</h3>
                <p>${order.des}</p>
                <p>数量：${order.nums}</p>
                <p>价格：${order.nums * order.price}</p>
                <p>${order.size} - ${order.color} - ${order.city}</p>
            </li>`;
        })
        $(".shoppingcar-list").html(htmlStr);
        $(".del-btn").click(function() {
            // 获取要删除的下标
            let index = $(this).attr("data-index");
            // 页面删除
            $(this).parent().remove();
            // 本地删除
            Car.remove(index);
            loading();
        }) 
    });
}