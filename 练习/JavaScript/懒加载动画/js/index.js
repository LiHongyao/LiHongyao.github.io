(function() {
    // 1. 获取动画元素
    var aniWrappers = Array.from(document.querySelectorAll('.animation-wrapper'));
    // 2. 获取窗口高度
    var _height    = window.innerHeight;
    // 3. 记录当前滚动的距离
    var _offset    = 0;
    // 4. 记录动画元素在页面中的位置的集合
    var _locations = [];
    // 5. 将个动画元素在页面中的位置存在到_locations集合中
    aniWrappers.forEach(function(aniWrapper, index) {
        _locations[index] = aniWrapper.offsetTop;
    });
    // 6. 监听页面滚动
    window.onscroll = function(){
        // 更新页面滚动的距离
        _offset = document.body.scrollTop || document.documentElement.scrollTop;
        // 遍历元素判断是否已经达到动画元素所在的位置
        // 如果达到动画元素所在的位置，那么就让其执行动画效果
        // 也就是说我们可直接添加.running，因为在.running中
        // 我们将动画的状态设置成了 running 即播放。
        _locations.forEach(function(location, index) {
            if(_height + _offset > location + 300) {
                aniWrappers[index].classList.add('running');
            }
        });
    };

})();