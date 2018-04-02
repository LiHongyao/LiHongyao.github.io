/**
 * 百度文字转语音API
 * http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=你要转换的文字
 *
 */

$(function () {

    var timer = null,
        index = 0,
        flag  = false,
        names = "杨洋、李赛寒、赵恒锐、邹林、赵文乐、温冲、张志威、刘金华、刘西、金星希、唐荣萍、张倩、彭丽、陶泽英、何仕林、冯豪、张吉丹、李德森、覃奋、刘伟、赵臣卫",
        names = names.split(/[,、]/);
    $(".handle-btn").click(function () {
        // 更改状态
        flag = !flag;
        // 更改标题
        $(this).text(flag ? "停止" : "开始");
        if(flag) {
            $(".res").css({fontSize: "48px"});
            timer = setInterval(function () {
                index = randomInteger(0, names.length - 1);
                $(".res").text(names[index]);
            }, 15);
        }else {
            // 清除定时器
            clearInterval(timer);
            timer = null;
            // 放大字体
            $(".res").animate({
                fontSize: "64px"
            }, 300);
            // 语音播放
            $("main > embed").remove();
            $("main").append($(`<embed src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=${names[index]}" type="audio/mp3" style="width: 0">`))
        }
    });

    function randomInteger(min, max) {
        if (min == undefined || max == undefined || isNaN(min) || isNaN(max)) {
            return -1;
        }else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

});


















