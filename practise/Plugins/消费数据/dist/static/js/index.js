$(function () {
    // 1. 设置图表
    let e1 = echarts.init($(".t1").get(0));
    let e2 = echarts.init($(".t2").get(0));
    // 2. 设置默认值
    setEchartsDefault("bar", e1);
    setEchartsDefault("pie", e2);
    // 3. 请求数据
    get().then((data) => {
        console.log(data);
        // 加载视图
        loaddingHtml(data);
        // 加载图表
        loaddingBar(e1, data);
        loaddingPie(e2, data);
        // 监听事件
        $(".data").on("input", function() {
            if(!$(this).text()) {
                $(this).text(0);
            }
            let key   = $(this).parent().children().first().text();
            let index = $(this).index() - 1;
            let val   = Math.round($(this).text());
            data[key][index] = val;
            loaddingBar(e1, data);
            loaddingPie(e2, data);
        })
    })
});

