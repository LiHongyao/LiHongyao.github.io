'use strict';

$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // 自动播放
        autoplay: true,
        // 滚动持续时间
        speed: 1000,
        // 滚动方向
        direction: 'horizontal',
        // 循环模式
        loop: true,
        // 切换效果
        /*
        effect: "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 30,
          modifier: 2,
          slideShadows : true
        },*/
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});