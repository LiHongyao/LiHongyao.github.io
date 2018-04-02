// 入门示例
let test = () => {
    // 创建echarts示例
    let myChart = echarts.init(document.querySelector("#app1"));
    // 配置echarts
    myChart.setOption({
        // 配置标题
        title: {
            // 设置主标题
            text: "W1708学员成绩表",
            // 设置主标题链接
            link: "https://github.com/LiHongyao",
            // 设置主标题样式
            textStyle: {
                color: "orange",
                textShadowColor: "#000",
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1
            },
            // 设置子标题
            subtext: "数据由耀哥提供",
            // 设置子标题样式
            subtextStyle: {
                color: "purple"
            },
            // 设置主标题与子标题之间的间距
            itemGap: 13,
            left: 0,
            // borderWidth: 1,
            // borderColor: "pink",
            // borderRadius: 5,
            // padding: 5
        },
        // 添加提示
        tooltip: {
            trigger: "axis"
        },
        // 设置工具箱
        toolbox: {
            // 添加工具箱
            feature: {
                // 保存为图片
                saveAsImage:{},
                // 数据视图
                dataView: {readOnly: false},
                // 图表类型转换
                magicType: {type: ['line', 'bar']},
                // 还原
                restore:{},
                // 缩放视图
                dataZoom:{}
            },
            // 设置朝向
            orient: "horizontal",
            // 设置icon大小
            itemSize: 20,
            // 设置icon间距
            itemGap: 8,
            right: 15
        },
        // 设置图例
        legend: {
            // 设置图例朝向
            orient: "horizontal",
            // 设置图例关闭时颜色
            inactiveColor: "green",
            // 设置类型
            type: "scroll",
            // 设置图例选择状态
            selected: {
                "小王":true,
                "小张":false,
                "小华":false,
                "小明":false,
                "小周":false
            },
            data: [{
                name:"小王",
                // icon:"circle",
                textStyle:{}
            }, "小张", "小华", "小明", "小周"]
        },
        // 设置X轴
        xAxis: {
            position: "bottom",
            type: "category",

            name: "类别",
            nameLocation: "end",

            data: ["HTML", "CSS", "Javascript", "jQuery"],
            axisPointer: {
                show: true,
                type:"shadow",
                label: true
            }
        },
        // 设置Y轴
        yAxis: {
            axisPointer: {
                show: true
            }
        },
        axisPointer: {

        },
        // 设置数据
        series: [
            {
                name: "小王",
                type: "line",
                data: [90, 50, 25, 76],
                markPoint: {
                    data: [
                        {type: "min", name: "最小值"},
                        {type: "max", name: "最大值"}
                    ]
                },
                markLine: {
                    data: [
                        {type: "average", name: "平均值"}
                    ]
                }
            },
            {
                name: "小张",
                type: "line",
                data: [80, 90, 70, 35],
                markPoint: {
                    symbol: "pin",
                    data: [
                        {type: "min", name: "最小值"},
                        {type: "max", name: "最大值"}
                    ]
                },
                markLine: {
                    data: [
                        {type: "average", name: "平均值"}
                    ]
                }
            },
            {
                name: "小华",
                type: "line",
                data: [65, 78, 92, 91],
                markPoint: {
                    data: [
                        {type: "min", name: "最小值"},
                        {type: "max", name: "最大值"}
                    ]
                },
                markLine: {
                    data: [
                        {type: "average", name: "平均值"}
                    ]
                }
            },
            {
                name: "小明",
                type: "line",
                data: [89, 66, 59, 83],
                markPoint: {
                    data: [
                        {type: "min", name: "最小值"},
                        {type: "max", name: "最大值"}
                    ]
                },
                markLine: {
                    data: [
                        {type: "average", name: "平均值"}
                    ]
                }
            },
            {
                name: "小周",
                type: "line",
                data: [75, 80, 86, 68],
                markPoint: {
                    data: [
                        {type: "min", name: "最小值"},
                        {type: "max", name: "最大值"}
                    ]
                },
                markLine: {
                    data: [
                        {type: "average", name: "平均值"}
                    ]
                }
            }
        ]
    });
};
// 异步加载数据
let asyncLoading = () => {
    let myChart = echarts.init(document.querySelector("#app2"));
    // 设置数据加载前的基础样式
    myChart.setOption({
        title: {
            text: "异步加载示例"
        },
        legend: {
            data: ["成绩"]
        },
        xAxis: {
            data: []
        },
        yAxis: {},
        tooltip:{},
        series: [
            {
                name: "成绩",
                type: "line",
                data: []
            }
        ]
    });
    // 获取json数据
    myChart.showLoading();
    setTimeout(function () {
        getJSON("./json/data.json", (data) => {
            myChart.setOption({
                legend: {
                    data: ["成绩"]
                },
                xAxis: {
                    data: data["categories"]
                },
                yAxis: {},
                series: [
                    {
                        name: "成绩",
                        type: "line",
                        data: data["data"]
                    }
                ],
            });
            myChart.hideLoading()
        });
    }, 3000);
};
// 修改数据
let modifyData = () => {
    let myCahrt = echarts.init(document.querySelector("#app3"));

    let _data = null;
    getJSON("./json/data.json", function (data) {
        _data = data;
        myCahrt.setOption({
            title: {
                text: "修改数据"
            },
            legend: {
                data: ["成绩"]
            },
            xAxis: {
                data: data["categories"]
            },
            tooltip:{},
            yAxis:{},
            series: [
                {
                    name: "成绩",
                    type: "bar",
                    data: data["data"]
                }
            ]
        })
    });

    // 修改数据
    setTimeout(function () {
        // 修改数据
        _data.data[1] = 30;
        // 更新视图
        myCahrt.setOption({
           series: [
               {
                   name:"成绩",
                   type:"bar",
                   data: _data.data
               }
           ]
        });
    }, 3000);


};
// 饼图
let testPie = () => {
    let myChart = echarts.init(document.querySelector("#app4"));
    let option = {
        title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            x: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a}<br/>{b}"
        },
        legend: {
            orient: "vertical",
            left: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
            {
                name: "访问来源",
                type: "pie",
                radius: "60%",
                center: ["50%", "60%"],
                data: [
                    {value: 335, name: "直接访问"},
                    {value: 310, name: "邮件营销"},
                    {value: 234, name: "联盟广告"},
                    {value: 135, name: "视频广告"},
                    {value: 888, name: "搜索引擎"}
                ]
            }
        ]

    };
    myChart.setOption(option);

};
// 仪表盘
let testGauge = () => {
    let myChart = echarts.init(document.querySelector("#app5"));
    let option = {
        tooltip: {
            formatter: "{a}<br/>{b}:{c}%"
        },
        toolbox: {
            feature: {
                restore:{},
                saveAsImage: {}
            }
        },
        series: [
            {
                radius: "100%",
                name: "业务指标",
                type: "gauge",
                detail: {formatter: "{value}%"},
                data: [{
                    value: 80.68, name: "完成率"
                }]
            }
        ]
    };
    myChart.setOption(option);
    // 动态修改数据
    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        console.log(option.series[0].data[0].value);
        myChart.setOption(option);
    }, 2000);
};
// 高级使用：两个图标合并使用
let testAdvanced1 = () => {
    let myChart = echarts.init(document.querySelector("#app6"));
    myChart.setOption({
        title: {
            text: "高级使用：两个图标合并使用"
        },
        tooltip: {
            trigger: "axis"
        },
        toolbox: {
            feature: {
                dataView:{readOnly:false},
                magicType:{type: ["line", "bar"]},
                restore: {},
                saveAsImage:{}
            }
        },
        legend: {
            data: ["蒸发量", "降水量", "平均温度"]
        },
        xAxis: [
            {
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: "value",
                name: "水量",
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: "{value} ml"
                }
            },
            {
                type: "value",
                name: "温度",
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }
        ],
        series: [
            {
                name:"蒸发量",
                type: "bar",
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:"降水量",
                type: "bar",
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:"平均温度",
                type:"line",
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    });

};







let getJSON = (url, callback) => {
    // 1. 创建请求对象
    let xhr = new XMLHttpRequest();
    // 2. 配置请求
    xhr.open("GET", url, true);
    // 3. 监听请求状态
    xhr.onload = function () {
        // 请求成功
        if(xhr.status == 200) {
            // 将JSON字符串转换为JSON对象
            let jsonObj = JSON.parse(xhr.response);
            // 回调结果
            callback && callback(jsonObj);
        }
    };
    // 4. 发送请求
    xhr.send(null);
};