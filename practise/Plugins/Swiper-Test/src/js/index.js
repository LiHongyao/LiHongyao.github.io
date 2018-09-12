$(function() {
    let mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        speed: 800,
        loop: true,
        grabCursor: true,
        // 设置过渡效果
        effect: "coverflow",
        // 自动播放
        autoplay: {
            disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        // 动画
        on:{
            init: function(){
                swiperAnimateCache(this); // 隐藏动画元素 
                swiperAnimate(this); // 初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
                 swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
            } 
        }
    })  
});