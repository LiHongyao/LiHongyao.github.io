(function() {
    // 1. 获取DOM元素及定义变量
    var ctItems    = Array.from(document.querySelectorAll('.ct-item'));
    var content    = document.querySelector('.content');
    // 记录是否为自动滚动
    var _isAnimating = false;
    // 2. 记录内容模块在页面中的位置
    var _locations = [];
    ctItems.forEach(function(ctItem, index) {
        _locations[index] = ctItem.offsetTop - content.offsetTop;
    })
    // 3. 获取菜单项
    var menuItems = Array.from(document.querySelectorAll('.menu-item'));
    menuItems.forEach(function(menuItem, index){
        menuItem.dataset.index = index;
        menuItem.onclick = function() {
            _isAnimating = true;
            var index = this.dataset.index;
            // 更新当前页面位置
            scrollTo({
                location: _locations[index],
                complete: function() {
                    setTimeout(function() {
                        _isAnimating = false;
                    }, 1000);
                }
            });
        }
    });
    // 4. 处理菜单
    var head = document.querySelector('.header');
    var _curOffset  = 0; 
    var _lastOffset = 0;
    window.onscroll = function() {
        if(_isAnimating == false) {
            _curOffset = document.body.scrollTop || document.documentElement.scrollTop;
            if(_curOffset - _lastOffset < 0) {
                head.classList.remove('hidden');
            }else {
                head.classList.add('hidden');
            }
            _lastOffset = _curOffset;
        }
    }
})();