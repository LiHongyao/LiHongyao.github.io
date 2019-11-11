/**
 options -> {
     location: 滚动到的位置
     duration: 滚动到指定位置的持续时间
     complete：滚动到指定位置之后的回调函数
 }
 */
function scrollTo(options) {
    // 默认处理
    var _bodyHeight      = document.documentElement.scrollHeight;
    var _windowHeight    = window.innerHeight;
    if(options.location  > _bodyHeight - _windowHeight) {
        options.location = _bodyHeight - _windowHeight;
    }
    options.complete = options.complete || function() {};
    options.duration = options.duration || 500;
    // 属性设置
    var _curLocation = document.body.scrollTop || document.documentElement.scrollTop;
    var _offset      = options.location - _curLocation;
    var _interval    = 10;
    var _frames      = options.duration / _interval;
    var _speed       = _speed > 0 ? Math.ceil(_offset / _frames) : Math.floor(_offset / _frames);
    var t = setInterval(function() {
        // 更新当前位置
        _curLocation = document.body.scrollTop || document.documentElement.scrollTop;
        // _speed > 0 && _curLocation < options.location
        // _speed < 0 && _curLocation > options.location 
        if((_speed > 0 && _curLocation < options.location) || (_speed < 0 && _curLocation > options.location)) {
            document.body.scrollTop = document.documentElement.scrollTop = _curLocation + _speed;
        }else {
            clearInterval(t);
            options.complete();
            document.body.scrollTop = document.documentElement.scrollTop = options.location;
        }
    }, _interval);
}

