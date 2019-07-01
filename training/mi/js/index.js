// 文档就绪函数
$(function () {
    // --------------------------------------------
    // 监听用户点击登录按钮
    $(".login-btn").click(function(){
        // 跳转至登录页面
        location.href = "./pages/login.html";
    });
    // --------------------------------------------
    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay: true, // 自动切换
        speed: 800, // 切换速度，单位ms
        loop: true, // 循环模式选项
        effect: "coverflow", // 切换效果
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })      


    // ---------------------------------------------
    // 1. 请求json数据
    $.ajax({
        // 数据存放的地址
        url: "../json/mi_phones.json",
        // 请求成功的回调函数
        // res：请求到的数据
        success: function (res) {
            console.log(res);
            // 2. 生成html元素
            // forEach 遍历数组元素
            // 2.1 创建数组存储创建好的li标签
            let htmlArr = [];
            // 2.2 遍历数据
            res.forEach(function (item) {
                // 2.3 创建li标签，并存入数组中
                htmlArr.push(`<li>
                    <img src="${item.thumbnail}">
                    <p class="title">${item.title}</p>
                    <p class="desc">${item.desc}</p>
                    <p class="price">${item.price}元</p>
                </li>`);
            });
            // 2.4 将生成的li标签添加至对应的标签内
            // $(css选择器) 可以获取html中的对应的标签
            // htmlArr.join("") 将数组转为字符串
            $(".phone-list").html(htmlArr.join(""));
        }
    });
});