// 创建Vue实例对象
new Vue({
    // 绑定元素
    el: "#app",
    // 绑定数据
    data: {
        // 页面展示数据
        infos: Model.getInfos(),
        // 记录窗口偏移的距离
        offset: 0,
        // 记录上一次偏移的位置
        lastOffset: 0,
        // 记录菜单对应模块的位置
        locations: [0]
    },
    // 元素挂载完成
    mounted() {
        // 加载轮播图
        new Swiper ('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
            autoplay:true,
            loop: true, // 循环模式选项        
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        });
        // 监听窗口滚动
        $(window).on('scroll', () => {
            // 更新窗口滚动给的距离
            this.offset = $(window).scrollTop();
            if(this.offset - this.lastOffset > 0) {
                // 内容向上滚动
                $('.head').css({'opacity':'0'});
            }else {
                // 内容向下滚动
                $('.head').css({'opacity':'1'});
            }
            // 更新上一次的偏移
            this.lastOffset = this.offset;
        });
        // 获取菜单对应的元素位置
        $('.ct-item').each((index, ctItem) => {
            // 存储菜单对应的元素位置
            this.locations.push($(ctItem).offset().top + 60);
        });
        // 处理菜单点击
        $('.menu-list li').each((index, li) => {
            // 将菜单项对应内容的位置
            // 绑定在对应的菜单项上
            li.dataset.location = this.locations[index];
        }).on('click', (event) => {
            // 获取用户点击的菜单项
            // 并获取对应菜单项内容所在的位置
            let location = event.target.dataset.location;
            $('html, body').animate({
                scrollTop: location
            });
        });
    },
    methods: {
        // 鼠标点击回到顶部按钮
        handleGoBackClick() {
            // 回到顶部
            $('html, body').animate({
                scrollTop: 0
            });
        }
    }
});