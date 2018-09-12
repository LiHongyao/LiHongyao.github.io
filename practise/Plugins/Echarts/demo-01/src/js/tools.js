class Tools {
    constructor(){}
    // 基本使用
    base() {
        // 构造echarts实例
        let myCharts = echarts.init($("#app-01")[0]);
        let branchs  = ["教学部", "教务部", "市场部", "咨询部", "财务部", "后勤部", "网咨部", "运维部"];
        let weeks    = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        // 配置图表
        myCharts.setOption({
            title: {
                text: "公司部门消费数据",
                subtext: "数据纯属虚构"
            },
            tooltip: {
                trigger: "axis"
            },
            toolbox: {
                feature: {
                    saveAsImage:{},
                    dataZoom: {},
                    magicType: {
                        type: ["line", "bar"]
                    },
                    restore: {},
                }
            },
            legend: {
                type: "scroll",
                bottom: 10,
                data: branchs,
                orient: "horizontal",
                formatter: "BRANCH:{name}",
                selectedMode: "multiple"
            },
            xAxis: {
                data: weeks,
                position: "bottom",
                name: "时间",
                nameLocation: "end"
            },
            yAxis: {
                name: "金额",
                nameLocation: "start"
            },
            series: (function(){
                let series = [];
                let legendDatas = ["教学部", "教务部", "市场部", "咨询部", "财务部", "后勤部", "网咨部", "运维部"];
                legendDatas.forEach((branch) => {
                    series.push({
                        type: "bar",
                        name: branch,
                        data: (function() {
                            let datas = [];
                            for(let i = 0; i < 7; i++) {
                                datas[i] = (Math.random() * 100).toFixed(2);
                            }
                            return datas;
                        })()
                    });
                });
                return series;
            })()
        });
    }
    // 异步加载数据
    asynchronousloading() {
        // 1. 预先设置
        let myCharts = echarts.init(document.querySelector("#app-02"));
        myCharts.setOption({
            title: {
                text: "周消费情况统计",
                subtext: "数据纯属虚构"
            },
            legend: {
                data: ["购物消费", "行车交通", "食品酒水", "休闲娱乐"],
                bottom: 0,
                selectedMode: "single",
                selected: {
                    "行车交通": false,
                    "购物消费": true,
                    "食品酒水": false,
                    "休闲娱乐": false
                }    
            },
            toolbox: {
                feature: {
                    saveAsImage:{},
                    dataZoom: {},
                    magicType: {
                        type: ["line", "bar"]
                    },
                    restore: {},
                }
            },
            tooltip: {
                show: true
            },
            xAxis: {
                type: "category",
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: []
        });
        // 2. 获取数据
        myCharts.showLoading();
        setTimeout(() => {
            $.ajax({
                url: "./static/json/consumption-data.json",
                type: "GET",
                dataType: "json",
                success: (response) => { 
                    myCharts.hideLoading();
                    // 更新设置
                    myCharts.setOption({    
                        series: (function(){
                            let series = [];
                            response.infos.forEach((item) => {
                                series.push({
                                    name: item.name,
                                    type: "line",
                                    data: item.value,
                                    markPoint: {
                                        data: [
                                            {name: "最大值", type: "max"},
                                            {name: "最小值", type: "min"}
                                        ]
                                    },
                                    markLine: {
                                        data: [
                                            {name: "平均值", type: "average"}
                                        ]
                                    }
                                });
                            });
                            return series;
                        })()
                    });
                }
            })
        }, 1500);
    }
    // 嵌套
    test() {
        let myChart = echarts.init(document.querySelector("#app-03"));
        myChart.setOption({
            title: {
                text: "高级使用：合并使用"
            },
            tooltip: {
                show: true
            },
            toolbox: {
                feature: {
                    saveAsImage:{},
                    dataZoom: {},
                    magicType: {
                        type: ["line", "bar"]
                    },
                    restore: {},
                }
            },
            legend: {
                data: ["蒸发量", "降水量", "平均温度"]
            },
            xAxis: [{
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }],
            yAxis: [{
                type: "value",
                name: "水量",
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: "{value} ml"
                }
            }, {
                type: "value",
                name: "温度",
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: "{value} °C"
                }
            }],
            series: [{
                name: "蒸发量",
                type: "bar",
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            }, {
                name: "降水量",
                type: "bar",
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }, {
                name: "平均温度",
                type: "line",
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                markPoint: {
                    data: [
                        {name: "最大值", type: "max"},
                        {name: "最小值", type: "min"},
                    ]
                },
                markLine: {
                    data:[{name: "平均值", type: "average"}]
                }
            }]
        });
    }
}


