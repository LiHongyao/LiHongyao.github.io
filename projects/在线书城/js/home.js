
// model
var model = {
    curIndex: 0,
    timer: null,
    books: [],
    path: "../images/",
    imgs: [ "1.png","2.png","3.png"],
    notices: ["双12全场图书打1折,更有隐藏的神秘惊喜","成都天府软件园读书分享会，期待您的加入","6·18 赠书会，我在天府软件园等你"]
};

// view model
new Vue({
    el: "#app",
    data: model,
    mounted() {
        // ajax 数据请求
        let _this = this;
        $.ajax({
            url: "../json/book-kind.json",
            type: "GET",
            dataType: "json",
            success: (response) => {
                // 更新model
                _this.books = response;
            }
        }); 
        // 自动轮播
        _this.play();
        // 广告切换
        _this.notice();
        // 给小圆点添加点击事件
        $(".idot").on("click", (e) => {
            // 获取事件触发对象
            let $target = $(e.target);
            // 异常处理/如果点击当前正在显示的小圆点，则直接不做
            if($target.index() == _this.curIndex) { return;}
            // 暂停定时器
            _this.stop();
            // 更新下标
            _this.curIndex = $target.index();
            // 切换图片显示
            _this.tab();
            // 重新启动定时器
            _this.play();
        }); 
    },
    methods: {
        // 自动播放
        play() {
            let _this = this;
            _this.timer = setInterval(() => {
                if(_this.curIndex == 2) {
                    _this.curIndex = 0;
                }else {
                    _this.curIndex++;
                }
                _this.tab();
            }, 5000);
        },
        // 暂停播放
        stop() {
            // 清除定时器
            clearInterval(this.timer);
            this.timer = null;
        },
        // 切换显示
        tab() {
            // 切换图片
            $(".imgs img").eq(this.curIndex).addClass("show").siblings().removeClass("show");
            // 切换小圆点
            $(".idot").eq(this.curIndex).addClass("show").siblings().removeClass("show");
        },
        // 广告切换
        notice() {
           let $notices = $(".notice-box .info");
           let index    = 0;
           setInterval(() => {
               if(index == 2) {
                   index = 0;
               }else {
                   index++;
               }
               $notices.eq(index).addClass("show").siblings().removeClass("show");
           }, 3000);
        },
        // 显示书本详情
        showBookDetails(e) {
            let $target  = $(e.target.parentElement);
            let dIndex = $target.index();
            let pIndex = $target.parent().parent().index();
            sessionStorage.bookinfos = JSON.stringify(this.books[pIndex]["infos"][dIndex]);
            location.href = "../pages/bookdetails.html";
        }
    }
});

