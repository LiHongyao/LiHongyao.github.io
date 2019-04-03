
let loadingHtml = (keyword, response) => {
    switch (keyword) {
        case "goods-content": {
            let datas = response["infolist"];
            let htmlStr = ``;
            datas.forEach((data, index) => {
                htmlStr += `
                    <section class="item">
                        <a class="link" data-index=${index} href="javascript:;">
                            <img src="./images/${data.imgs[0]}" alt="图片加载失败">
                        </a>
                        <p class="price">¥${data.barginprice}</p>
                        <a class="link title" data-index=${index} href="javascript:;" >${data.title}</a>
                        <div class="infos">
                            <div class="infos-item sale">
                                <span class="text">月销量：</span>
                                <span class="sale-val">${data.sales}</span>
                            </div>
                            <div class="infos-item evaluation">
                                <span class="text">评价：</span>
                                <span class="evaluation-val">${data.evaluation}</span>
                            </div>
                        </div>
                    </section>
                `;
            });
            $(".goods-list").html(htmlStr);
        } break;
        case "goods-detail": {
            $(".contents").html(`
                <div class="box left-box">
                    <div class="small-box">
                        <img class="small-img" src="../images/${response.imgs[0]}" alt="">
                    </div>
                    <div class="thumbnail">${
                        (function(){
                            let thumbnailStr = ``;
                            response.imgs.forEach((imgName) => {
                                thumbnailStr += `
                                    <img src="../images/${imgName}" alt="图片加载失败">
                                `;
                            });
                            return thumbnailStr;
                        }())
                    }</div>
                </div>
                <div class="box right-box">
                    <div class="title-box">
                        <h3 class="title">${response.title}</h3>
                        <p class="des">${response.des}</p>
                    </div>
                    <div class="price-box">
                        <section>
                            <img src="../images/ticket.png" alt="图片加载失败">
                            <span>全天猫实物商品通用</span>
                        </section>
                        <section>
                            <span class="head-flag">价格</span>
                            <span>
                                ¥<span class="price">${response.price}</span>
                            </span> 
                        </section>
                        <section>
                            <span class="head-flag">促销价</span>
                            <span>
                                ¥<span class="barginprice">${response.barginprice}</span>
                            </span>
                        </section>
                    </div>
                    <div class="address-box">
                        <span class="head-flag">运费</span>
                        <span>广东至</span>
                        <select class="sel-city">
                            <option>成都</option>
                            <option>上海</option>
                            <option>重庆</option>
                            <option>深圳</option>
                            <option>北京</option>
                            <option>西安</option>
                        </select>
                        <span>快递：0.00</span>
                    </div>
                    <div class="other-box">
                        <section class="item">
                            <span class="head-flag">月销量</span>
                            <span style="color:#FF0036">${response.sales}</span>
                        </section>
                        <section class="item">
                            <span class="head-flag">累积评价</span>
                            <span style="color:#FF0036">${response.evaluation}</span>
                        </section>
                        <section class="item">
                            <span class="head-flag">送天猫积分</span>
                            <span style="color:#280">38</span>
                        </section>
                    </div>
                    <div class="infos-box">
                        <section class="item">
                            <span class="head-flag">尺码</span>
                            <div class="size">
                                <span>165/S</span>
                                <span>170/M</span>
                                <span>175/L</span>
                                <span>180/XL</span>
                                <span>185/XXL</span>
                            </div>
                        </section>
                        <section class="item">
                            <span class="head-flag">颜色</span>
                            <div class="colors">
                                <span>黑色</span>
                                <span>蓝色</span>
                                <span>灰色</span>
                                <span>白色</span>
                            </div>
                        </section>
                        <section class="item">
                            <span class="head-flag">数量</span>
                            <div class="stock">
                                <input class="nums" min="1"  value="1" max="${response.stock}" type="number">
                                <span>件</spanjian>
                                <span>库存：${response.stock}</span>
                            </div>
                        </section>
                    </div>
                    <div class="btn-box">
                        <button type="button" class="buy">立刻购买</button>
                        <button type="button" class="shoppingcar">加入购物车</button>
                    </div>
                </div>
            `);
        } break;
    }
};


let add = (order) => {
    let rootArr = null;
    if(localStorage.shoppingcar) {
        rootArr = JSON.parse(localStorage.shoppingcar);
    }else {
        rootArr = [];
    }
    order.goodsid = `GIN${(function() {
        let nums = "1234567890", res = "";
        for(let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 10);
            res += nums.charAt(index);
        }
        return res;
    })()}`;
    rootArr.push(order);
    localStorage.shoppingcar = JSON.stringify(rootArr);
}


let get = (success, fail) => {
    if(!localStorage.shoppingcar) {
        fail();
    }else {
        let rootArr = JSON.parse(localStorage.shoppingcar);
        if(rootArr.length == 0) {
            fail();
        }else {
            success(rootArr);
        }
    }
};

let remove = (index) => {
    if(localStorage.shoppingcar) {
        let rootArr = JSON.parse(localStorage.shoppingcar);
        rootArr.splice(index, 1);
        localStorage.shoppingcar = JSON.stringify(rootArr);
    }
};