$(function() {
    let data = JSON.parse(sessionStorage.book);
    $(".content").html(`
        <div class="infos-box">
            <img src="${data.cover}" alt="">
            <div class="infos">
                <p>书名：${data.name}</p>
                <p>作者：${data.author}</p>
                <p>价格：¥ ${data.price}</p>
                <p>时间：${data.date}</p>
                <p>编号：${data.bookNum}</p>
                <p>页数：${data.page}</p>
            </div>
        </div>
        <div class='btns'>
            <span class='btn buy'>立即购买</span>
            <span class='btn insert-shopping-cart'>添加购物车</span>
        </div>
        <fieldset>
            <legend>作者简介</legend>
            <p class="ct">${data.authorInfo}</p>
        </fieldset>
        <fieldset>
            <legend>书籍简介</legend>
            <p class="ct">${data.describe}</p>
        </fieldset>
        <fieldset>
            <legend>书籍概述</legend>
            <p class="ct">${data.info1}</p>
            <p class="ct">${data.info2}</p>
        </fieldset>`
    );
    // 点击添加购物车
    $(".insert-shopping-cart").click(function() {
        // 创建订单
        let date = new Date();
        let order = {
            "name": data.name,
            "price": data.price,
            "total": data.price.toFixed(2),
            "num": 1,
            "des": data.describe,
            "img": data.cover,
            "bookNum": data.bookNum
        };
        // 加入购物车
        ShoppingCart.insert(order, function() {
            new LHYAlertView({
                type: "alert",
                message: "添加购物车成功！"
            });
        });

    });
});
