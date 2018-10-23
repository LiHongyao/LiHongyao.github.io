$(function() {
    // 1. ajax 数据请求
    $.ajax({
        url: "../json/book-info.json",
        type: "GET",
        success: (res) => {
            // 2. 加载元素
            $('.ct-list').html(`${(function() {
                let lis = [];
                res.forEach((data, index) => {
                    lis[index] = `<li class="book clearFix">
                        <img class='fl' src='${data.cover}' />
                        <div class='fr infos'>
                            <p class='name'>${data.name}</p>
                            <p class='author'>${data.author}</p>
                            <p class='price'>¥ ${data.price}</p>
                        </div>
                    </li>`;
                });
                return lis.join('');
            })()}`);
            // 3. 事件添加
            $('.book').click(function() {
                // 临时存储用户点击书本对应的信息，便于详情页读取
                sessionStorage.book = JSON.stringify(res[$(this).index()]);
                // 跳转到详情页
                location.href = "../pages/detais.html";
            });
        }
    });

    // 进入购物车
    $(".shopping-cart").click(function(){
        location.href = "../pages/shopping-cart.html";
    });
    // 处理购物车数量
    ShoppingCart.query(function(orders) {
        $('.shopping-cart .num').text(orders ? orders.length : 0);
    });
});