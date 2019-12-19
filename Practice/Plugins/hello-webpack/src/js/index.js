import '../less/index.less';
import Swiper from "swiper";
import "swiper/css/swiper.css";

import echarts from 'echarts';

// echarts
let myChart = echarts.init($('.echarts-box')[0]);
myChart.setOption({
    // 标题
    title: {
        text: 'ECharts Teaching',
        subtext: '数据纯属虚构'
    },
    // 提示
    tooltip: {},
    // 图例
    legend: {
        data: ['周瑜', '小乔', '诸葛亮'],
        bottom: 0
    },
    // X轴
    xAxis: {
        data: ['语文', '数学', '英语', '政治', '历史', '地理']
    },
    // Y轴
    yAxis: {
        type: 'value',
        max: 100,
        min: 0,
        interval: 10
    },
    // 工具
    toolbox: {
        show: true,
        feature: {
            // 缩放
            dataZoom: {},
            // 数据视图
            dataView: { readOnly: false },
            // 类型切换
            magicType: { type: ['line', 'bar'] },
            // 重置
            restore: {},
            // 保存为图片
            saveAsImage: {}
        }
    },
    // 数据
    series: (function () {
        let arr = [];
        let legends = ['周瑜', '小乔', '诸葛亮'];
        legends.forEach(name => {
            let data = [];
            for (let i = 0; i < 6; i++) {
                data.push(Math.round(Math.random() * 100));
            }
            arr.push({
                name,
                type: 'bar',
                data,
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            });
        })
        console.log(arr)
        return arr;
    })()
});

// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 自动播放
    autoplay: true,
    // 切换效果
    effect: 'coverflow',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

// 判断是否登录
if (!sessionStorage.LOGIN_USER) {
    // 跳转至登录页面
    location.href = './static/pages/login-register.html';
}


