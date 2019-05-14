

$(function() {
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 获取商品详情下标
            let index = location.search.slice(-1);  
            let data  = response.infolist[index];
            // 构建订单对象
            let order = {
                title: data.title, // 商品标题
                des: data.des,     // 商品描述
                price: data.price, // 商品价格
                nums: 1,  // 商品数量
                size: "",    // 商品尺寸
                color: "",   // 商品颜色
                city: "成都", // 发送城市
                imgName: data.imgs[0]
            };
            // 加载数据
            loadingHtml("goods-detail", data);
            // 处理左侧图片
            $(".thumbnail img").on("mouseenter", (e) => {
                let $target = $(e.target);
                // 记录订单图片
                let src   = $target.attr("src");
                let index = src.lastIndexOf("/") + 1;
                order.imgName = src.slice(index);
                // 设置图片单选效果
                $target.addClass("selected").siblings().removeClass("selected");
                // 修改大图显示
                $(".small-img").attr({
                    "src": $target.attr("src")
                })
            });
        
            // 处理地址选择
            $(".sel-city").on("change", (e) => {
                let $target = $(e.target);
                order.city = $target.val();
            });

            // 尺码
            $(".size span").on("click", (e) => {
                let $target = $(e.target);
                order.size = $target.text();
                $target.addClass("selected").siblings().removeClass("selected");
            });

            // 选择颜色
            $(".colors span").on("click", (e) => {
                let $target = $(e.target);
                order.color = $target.text();
                $target.addClass("selected").siblings().removeClass("selected");
            });

            $(".nums").on("change", (e) => {
                let $target = $(e.target);
                order.nums  = $target.val();
                order.price = (parseFloat(data.barginprice) * order.nums).toFixed(2);
            });
            
            
            
            // 点击添加购物车
            $(".shoppingcar").on("click", () => {
                if(!order.size || !order.color) {
                    alert("请完善购物信息！");
                }else {
                    alert("添加购物车成功！");
                    // 添加购物车
                    Car.add(order);
                    location.href = "../pages/shoppingcar.html";
                }
            });
        }
    })
});