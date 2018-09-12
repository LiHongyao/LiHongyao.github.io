/**
 * 百度文字转语音API
 * http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=你要转换的文字
 *
 */

$(function () {

    var timer = null,
        index = 0,
        flag  = false,
        names = "叶文玉、吴酥、苏小波、付巽、张亚超、谢艳军、陈静鸿、王旺、蒋志军、于莎、张欢、郑家伦、黄浩、周万美、马开成、喻柳萍、张吉浩、刘羽坤、冯句交、周潇、罗辑、禹舜、陈瑶、周凤",
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
            // $("main > embed").remove();
            // $("main").append($(`<embed src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=${names[index]}" type="audio/mp3" style="width: 0">`))
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


















