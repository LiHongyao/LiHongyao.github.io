// jQuery 文档就绪函数
$(function() {
    // 获取数据
    const data = Model.GET("attractions");
    // 加载类型列表
    loadingTypeList();
    // 默认选中所有景点
    $(".type-list").children().first().addClass("sel");
    // 定义变量，记录过滤的type值
    let type = 1;
    loadingAttractionsList();
    // 监听用户点击景点区域
    $(".type-list li").click(function() {
        // this 指向的是用户点击的那个元素
        // 获取元素上绑定的type值并赋值给type变量
        type = $(this).attr("data-type");
        // 更新选中
        $(this).addClass("sel").siblings().removeClass("sel");
        // 重新加载数据
        loadingAttractionsList();
    });
    
    function loadingAttractionsList(){ 
        // 根据type值过滤显示的数据集合
        let list = null;
        // 如果type为1，则表示获取所有景点数据
        // 否则，根据type值过滤数据
        if(type == 1) {
            list = data.contentlist;
        }else {
            list = data.contentlist.filter(item => item.type == type);
        }
        console.log(list);
        // 加载li
        $(".attractions-list").html((function() {
            let lis = list.map(item => {
                return `<li>
                    <img src="../images/${item.imgUrl}">
                    <p class="name">${item.name}</p>
                    <p class="rating">客户评分：${item.rating}</p>
                 </li>`;
            });
            return lis.join("");
        })());
    }

    function loadingTypeList() {
        $(".type-list").html((function() {
            // 拼接li
            let lis = data.types.map(item => `<li data-type="${item.type}">${item.text}</li>`);
            // join()：数组转字符串
            return lis.join("");
        })());
    }
});
