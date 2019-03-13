$(function() {
    // 配置地图
    let map   = new BMap.Map("map"); 
    let point = new BMap.Point(104.0779891656, 30.5520105517);
    map.centerAndZoom(point, 15); 
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true); 
    // 添加控件
    map.addControl(new BMap.NavigationControl());    
    map.addControl(new BMap.ScaleControl());    
    map.addControl(new BMap.OverviewMapControl());    
    map.addControl(new BMap.MapTypeControl()); 
    // 添加标注
    var marker = new BMap.Marker(point);// 创建标注    
    map.addOverlay(marker);// 将标注添加到地图中 
});
