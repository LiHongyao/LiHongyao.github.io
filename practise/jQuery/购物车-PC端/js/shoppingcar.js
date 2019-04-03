$(function() {

    if(sessionStorage.order)  {
        add(JSON.parse(sessionStorage.order));
        sessionStorage.removeItem("order");
    }
    get((datas) => {
        let htmlStr = ``;
        datas.forEach((data) => {
            htmlStr += `
            <li>
                <input type="checkbox" class="checkbox">
                <img src="${data.imgName}">
                <h3 class="title">${data.title}</h3>
                <p class="des">${data.des}</p>
                <p class="price">${data.price}</p>
                <p class="nums contenteditable="true"">${data.nums}</p>
                <p class="color">${data.color}</p>
                <p class="size" >${data.size}</p>
                <p class="city">${data.city}</p>
                <button type="button" class="delete">删除订单</button>
            </li>
            `;
        });
        $(".shoppingcar-list").html(htmlStr);
    }, () => {
        $(".shoppingcar-list").html(`
            <li class="nogoods">购物是空的</li>
        `);
    })

    // 删除
    $(".delete").on("click", (e) => {
        let $target = $(e.target);
        let index   = $target.parent().index();
        // 页面中移除
        $(".shoppingcar-list li")[index].remove();
        // 在本地移除
        remove(index);
    });
    $(".goHome").on("click", () => {
        location.href = "../index.html";
    });
});