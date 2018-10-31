class EchartsObj {
    // 基础示例
    static basic() {
        // 1. 初始化echarts实例
        let myCharts = echarts.init($('#demo-01').get(0));
        // 2. 设置默认图标
        let legend   = ["教学部", "教务部", "行政部", "市场部", "咨询部", "后勤部"];
        let courses  = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        let series   = [];
        myCharts.setOption({
            // 3.1. 设置标题
            title: {
                // 主标题
                text: "一周消费数据",
                link: "https://github.com/lihongyao/",
                // 子标题
                subtext: "数据仅供参考"
            },
            // 3.2. 设置图例
            legend: {
                type: "scroll",
                data: legend,
                bottom: 0,
                orient: "horizontal",
                formatter: "RIMI.{name}",
                selectedMode: "multiple",
                selected: {
                    "市场部":false,
                    "咨询部":false,
                    "后勤部":false,
                }
            },
            // 3.3. 设置X轴
            xAxis: {
                data: courses
            },
            yAxis: {},
            // 3.4. 定义数据
            series: series,
            // 3.5. 提示
            tooltip: {
                // 触发类型
                trigger: "axis",
                triggerOn: "mousemove",
                formatter: ""
            },
            // 3.6. 工具栏
            toolbox: {
                // 配置工具项
                feature: {
                    // 保存图片
                    saveAsImage:{
                        type: "jpeg",
                        name: "rimi",
                        title: "下载"
                    },
                    // 重置
                    restore:{},
                    // 编辑数据
                    dataView: {},
                    // 缩放
                    dataZoom: {},
                    // 动态类型切换
                    magicType: {
                        type: ["bar", "line"],
                        right: 0
                    }
                }
            } 
        });
        // 3. 请求数据 通过延时函数模拟 $.ajax()
        // 显示加载器
        myCharts.showLoading();
        setTimeout(() => { 
            $.each(legend, (index, name) => {
                series[index] = {
                    name: name,
                    type: "bar",
                    data: (function(){
                        let grades = [];
                        for(let i = 0; i < courses.length; i++) {
                            grades[i] = Math.round(Math.random() * 500);
                        }
                        return grades;
                    }()),
                    markPoint: {
                        data: [
                            {name: "最大值", type: "max"},
                            {name: "最小值", type: "min"},
                        ]
                    },
                    markLine: {
                        data: [
                            {name:"平均值", type: "average"}
                        ]
                    }
                };
            });
            // 更新图表
            // 隐藏加载器
            myCharts.hideLoading();
            myCharts.setOption({
                series: series
            });
            // 模拟用户修改数据
            setTimeout(() => {
                // 修改数据
                series[0].data[2] = 500;
                myCharts.setOption({
                    series: series
                });
            }, 1000);
        }, 3000);
    }
}


