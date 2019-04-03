(function () {
    // 获取遮罩
    var mask = $(".mask"),
        close = $(".close"),
        title = $(".mask .title"),
        video = $(".mask video");
    // 获取数据
    GET("../json/infos.json", function (response) {
        // 加载页面元素
        loadingHtml($(".video-list"), response);
        // 操作
        // Array.from == Array.prototype.slice.call
        var oTops = Array.from($(".video-list .top-bar", true));
        var oTtitles = Array.from($(".video-list .title", true));
        // 循环添加事件
        for (var i = 0; i < 4; i++) {
            // 给缩略图添加点击事件
            oTops[i].onclick = showMask;
            // 监听鼠标移入图片缩略区域
            oTops[i].onmouseenter = function () {
                this.firstElementChild.src = "../images/play_hov.png";
            }
            // 监听鼠标移出图片缩略区域
            oTops[i].onmouseleave = function () {
                this.firstElementChild.src = "../images/play.png";
            }
            // 给标题添加点击事件
            oTtitles[i].onclick = showMask;
        }


    });
    // 点击关闭按钮
    close.onclick = function () {
        // 关闭遮罩
        mask.classList.remove("show");
        // 停止视频
        video.pause();
    }
    function showMask() {
        // 显示遮罩
        mask.classList.add("show");
        // 设置标题
        title.textContent = this.dataset.title;
        // 设置视频播放地址
        video.src = this.dataset.url;
        // 自动播放
        video.play();
    }


})();