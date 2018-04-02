

// 展示地图
function showMap() {
    // 1. 创建地图
    var map = new BMap.Map("container");
    // 2. 创建坐标
    var point = new BMap.Point(104.0607569093,30.5622079951);
    // 3. 设置地图中心点坐标和级别
    map.centerAndZoom(point, 15);
    // 4. 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
    // 5. 导航控件
    map.addControl(new BMap.NavigationControl());
    // 6. 比例尺控件
    map.addControl(new BMap.ScaleControl());
    // 7. 地图类型控件
    map.addControl(new BMap.MapTypeControl());
    // 8. 缩略地图
    map.addControl(new BMap.OverviewMapControl());
    // 9. 创建标注
    var marker = new BMap.Marker(point);
    // 10. 将标注添加到地图中
    map.addOverlay(marker);
}

// 回到顶部
function goTop() {

    // 位移的距离
    var offset = document.body.scrollTop || document.documentElement.scrollTop;
    // 监听页面当前显示的位置
    window.onscroll = function () {
        // 更新当前位置
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    };
    // 动画持续时间
    var duration = 1000;
    // 每一帧持续的时间
    // 影响动画流畅性
    var interval = 15;
    // 动画执行的帧数
    var frames = duration / interval;
    // 计算每一帧位移的距离
    // Math.ceil() -> 向上取整
    var speed = Math.ceil(offset / frames);
    // 定时器，每隔一定时间调用一次函数
    var t = setInterval(function () {
        if(offset > 0) {
            document.body.scrollTop = document.documentElement.scrollTop =  offset - speed;
        }else {
           // 清除定时器
           clearInterval(t);
           // 矫正位置
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }, interval);
}






















