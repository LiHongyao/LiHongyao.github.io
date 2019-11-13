(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        speed: 1000,
        autoplay: true,
        loop: true, 
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    }) 

})();