"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 工具类
var Util =
/*#__PURE__*/
function () {
  // 构造器
  function Util() {
    _classCallCheck(this, Util);
  } // 静态方法（类方法），直接通过类名调用
  // 1. 基础示例


  _createClass(Util, null, [{
    key: "echarts_basic",
    value: function echarts_basic() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("basic")); // 配置图表

      myChart.setOption({
        // 标题
        title: {
          // 主标题
          text: "Echarts 入门示例",
          // 子标题
          subtext: "模拟数据，仅供参考"
        },
        // 提示框
        tooltip: {
          trigger: "axis",
          formatter: "消费时间：{b}<br/>消费金额：{c}"
        },
        // 图例
        legend: {
          data: ["消费数据"]
        },
        // X坐标
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        // Y坐标
        yAxis: {},
        // 数据源
        series: [{
          // 图例名称
          name: "消费数据",
          // 柱状图
          type: "bar",
          // 数据集合
          data: [30, 40, 28, 60, 21, 55, 80]
        }]
      });
    } // 2. 综合示例

  }, {
    key: "echarts_composite",
    value: function echarts_composite() {
      var myChart = echarts.init(document.getElementById("composite"));
      myChart.setOption({
        // 配置标题
        title: {
          // 主标题
          text: "学员成绩表",
          // 子标题
          subtext: "数据由李鸿耀老师统计",
          // 子链接
          sublink: "https://github.com/lihongyao"
        },
        // 配置图例
        legend: {
          // 宽度
          width: 300,
          // 图例类型
          type: "scroll",
          // 图例数据
          data: ["语文", "数学", "英语", "政治", "历史", "地理"],
          // 定位
          bottom: 0,
          // 朝向
          orient: "horizontal",
          // 设置选中状态
          selected: {
            "政治": false,
            "历史": false,
            "地理": false
          }
        },
        // 配置提示框
        tooltip: {
          formatter: "学科：{a}<br/>姓名：{b}<br/>成绩：{c}"
        },
        // 配置X轴
        xAxis: {
          data: ["杰斯", "露娜", "皎月"]
        },
        // 配置Y轴
        yAxis: {},
        // 配置工具栏
        toolbox: {
          feature: {
            // 切换图标显示
            magicType: {
              type: ["line", "bar"]
            },
            // 缩放
            dataZoom: {},
            // 保存为图片
            saveAsImage: {
              type: "png",
              title: "下载"
            },
            // 还原
            restore: {},
            // 数据视图工具
            dataView: {
              title: "数据"
            }
          }
        },
        // 配置数据
        series: [{
          // 数据对应的图例名称
          name: "语文",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [90, 80, 59]
        }, {
          // 数据对应的图例名称
          name: "数学",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [50, 60, 39]
        }, {
          // 数据对应的图例名称
          name: "英语",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [59, 72, 94]
        }, {
          // 数据对应的图例名称
          name: "政治",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [80, 92, 86]
        }, {
          // 数据对应的图例名称
          name: "历史",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [72, 80, 78]
        }, {
          // 数据对应的图例名称
          name: "地理",
          // 展示图例的类型
          type: "bar",
          // 展示数据
          data: [70, 90, 39]
        }]
      });
    } // 3. 异步加载

  }, {
    key: "echarts_async",
    value: function echarts_async() {
      var myChart = echarts.init(document.getElementById("async")); // 设置默认显示

      myChart.setOption({
        title: {
          text: "一周气温图例",
          subtext: "数据纯属虚构，仅供参考"
        },
        tooltip: {
          formatter: "{b}:{c}°C"
        },
        legend: {
          data: ["天气数据"]
        },
        xAxis: {
          name: "周期",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          name: "气温",
          nameLocation: "start",
          min: 0,
          max: 50,
          interval: 10,
          // 设置刻度
          axisLabel: {
            formatter: "{value}°C"
          }
        }
      }); // 异步加载
      // 启动加载动画

      myChart.showLoading();
      setTimeout(function () {
        var temperatures = [];

        for (var i = 0; i < 7; i++) {
          // 添加随机气温
          temperatures.push((Math.random() * 50).toFixed(2));
        } // 隐藏加载动画


        myChart.hideLoading(); // 更新图例

        myChart.setOption({
          series: [{
            name: "天气数据",
            type: "line",
            data: temperatures,
            markPoint: {
              data: [{
                name: "最大值",
                type: "max",
                symbolSize: 40,
                label: {
                  formatter: "{c} °C"
                }
              }, {
                name: "最小值",
                type: "min",
                symbolSize: 40,
                label: {
                  formatter: "{c} °C"
                }
              }]
            },
            markLine: {
              data: [{
                name: "平均值",
                type: "average"
              }]
            }
          }]
        });
      }, 500);
    } // 4. 饼图

  }, {
    key: "echarts_bar",
    value: function echarts_bar() {
      var myChart = echarts.init(document.getElementById("bar"), "dark");
      myChart.setOption({
        tooltip: {
          formatter: "来源：{b}<br/>占比：{d}%"
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '60%',
          roseType: 'angle',
          data: [{
            value: 235,
            name: '视频广告'
          }, {
            value: 274,
            name: '联盟广告'
          }, {
            value: 310,
            name: '邮件营销'
          }, {
            value: 335,
            name: '直接访问'
          }, {
            value: 400,
            name: '搜索引擎'
          }]
        }]
      });
    } // 5. 雷达图

  }, {
    key: "echarts_radar",
    value: function echarts_radar() {
      var myChart = echarts.init(document.getElementById("radar"));
      myChart.setOption({
        title: {
          text: '王者荣耀战绩'
        },
        tooltip: {},
        legend: {
          data: ["近期表现"],
          right: 0
        },
        radar: {
          radius: "60%",
          indicator: [{
            name: '输出',
            max: 100
          }, {
            name: 'KDA',
            max: 100
          }, {
            name: '发育',
            max: 100
          }, {
            name: '团战',
            max: 100
          }, {
            name: '生存',
            max: 100
          }]
        },
        series: [{
          name: '蓉城、杀神耀近期表现',
          type: 'radar',
          data: [{
            value: [99, 90, 76, 80, 75]
          }]
        }]
      });
    }
  }]);

  return Util;
}();