/**
 * 加载视图
 * @param {Object} data 数据
 */
function loaddingHtml(data) {
    return new Promise((resolve, reject) => {
        let days = ["#", "周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        $("thead").html(`<tr>${(function () {
            let dayStr = "";
            $.each(days, (index, val) => {
                dayStr += `<th scope="col">${val}</th>`
            })
            return dayStr;
        })()}</tr>`);
        // 加载内容
        let rows = ``;
        for (let key in data) {
            rows += `<tr><th scope="row">${key}</th>${(function () {
                let s = ``;
                $.each(data[key], (index, val) => {
                    s += `<td class="data" contenteditable>${val}</td>`
                })
                return s;
            })()}</tr>`
        }
        $("tbody").html(rows);

    })

}
/**
 * 设置默认显示
 * @param {String} type 图表类型
 * @param {Echarts} echarts 图表对象
 */
function setEchartsDefault(type, echarts) {
    let xAxisData = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    switch (type) {
        case "bar": {
            echarts.setOption({
                title: { text: "周消费数据" },
                tooltip: {},
                toolbox: {
                    feature: {
                        magicType: {
                            type: ["line", "bar"]
                        },
                        saveAsImage: {},
                        restore: {}
                    }
                },
                xAxis: { data: xAxisData },
                yAxis: {
                    axisLabel: {
                        formatter: "{value} 元"
                    }
                }
            })
        } break;
        case "pie": {
            echarts.setOption({
                title: { text: "周消费数据" },
                tooltip: {}
            })
        } break;
    }
}
/**
 * 加载柱状图
 * @param {Echarts} echarts 图表对象
 * @param {Object} data 图表数据
 */
function loaddingPie(echarts, data) {
    let legend = {
        type: "scroll",
        orient: 'vertical',
        right: 0,
        data: Object.keys(data)
    }
    let dataArr = [];
    $.each(legend.data, (index, key) => {
        let total = data[key].reduce((prev, cur, index, arr) => {
            return prev + cur;
        });
        dataArr.push({
            name: key,
            value: total
        });
    })
    echarts.setOption({
        legend,
        series: {
            name: '周消费',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: dataArr
        }
    })
}
/**
 * 加载柱饼图
 * @param {Echarts} echarts 图表对象
 * @param {Object} data 图表数据
 */
function loaddingBar(echarts, data) {
    let legend = {
        type: "scroll",
        orient: 'vertical',
        data: Object.keys(data),
        right: 0,
        top: 50
    };
    let series = [];
    $.each(legend.data, (index, name) => {
        series[index] = {
            type: "bar",
            name,
            data: data[name],/*
            markPoint: {
                data: [
                    { name: "最大值", type: "max", symbolSize: 40 },
                    { name: "最小值", type: "min", symbolSize: 40 }
                ]
            },
            markLine: {
                data: [
                    { name: "平均值", type: "average" }
                ]
            }*/
        }
    })
    echarts.setOption({
        legend,
        series
    })
}
/**
 * 随机生成一组数据
 */
function get() {
    return new Promise((resolve, reject) => {
        let data = {
            "餐饮": [], "日用": [], "购物": [], "交通": [], "零食": [], "社交": [], "烟酒": []
        };
        for (let arr of Object.values(data)) {
            for (let i = 0; i < 7; i++) {
                arr.push(Math.round(Math.random() * 500));
            }
        }
        resolve(data);
    })
}