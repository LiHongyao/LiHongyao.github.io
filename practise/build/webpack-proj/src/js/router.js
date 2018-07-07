

$(function() {
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls     = [
        'index.html',
        'static/pages/news.html',
        'static/pages/social.html',
        'static/pages/about.html'
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.menu-list li').on('click', (event) => {
        // 获取点击菜单项的下标
        let index = $(event.currentTarget).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
});


