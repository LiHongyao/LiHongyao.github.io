// 数据模型
class Model {
    constructor() {}
    static getInfos() {
        return {
            // 1. 菜单标题
            "menuTitles": ['首页', '班级设置', '动态资讯', '师资团队', '联系我们'],
            // 2. 横幅
            "banner": [
                {
                    "imgName": "icons-01.png",
                    "title": "会员休息区",
                    "subTitle": "lounge"
                },
                {
                    "imgName": "icons-02.png",
                    "title": "在线客服",
                    "subTitle": "service"
                },
                {
                    "imgName": "icons-03.png",
                    "title": "淋浴间",
                    "subTitle": "shower"
                },
                {
                    "imgName": "icons-04.png",
                    "title": "无线网覆盖",
                    "subTitle": "WIFI"
                },
            ],
            // 3. 班级设置
            "classSet": [
                {
                    "imgName": "classset-01.jpg",
                    "title": "特色幼儿班",
                    "subTitle": "招收3~5岁儿童"
                },
                {
                    "imgName": "classset-02.jpg",
                    "title": "青少年成长班",
                    "subTitle": "招收10~16岁青少年"
                },
                {
                    "imgName": "classset-03.jpg",
                    "title": "成人兴趣班",
                    "subTitle": "常年招收18岁以上成人"
                },
                {
                    "imgName": "classset-04.jpg",
                    "title": "私教训练A班",
                    "subTitle": "全龄段招生"
                },
                {
                    "imgName": "classset-05.jpg",
                    "title": "私教训练B班",
                    "subTitle": "全龄段招生"
                },
                {
                    "imgName": "classset-06.jpg",
                    "title": "私教训练C班",
                    "subTitle": "全龄段招生"
                },
            ],
            // 4. 动态资讯
            "news": {
                "titles": ["全部资讯", "最新动态", "行业资讯"],
                "ctList": [
                    {
                        "imgName": "news-01.jpg",
                        "title": "跆拳道晋级标准",
                        "date": "2017 06-16",
                        "desc": "中国房地产业协会、上海易居房地产研究院中国房地产测评中心近日联合..."
                    },
                    {
                        "imgName": "news-02.jpg",
                        "title": "跆拳道心理学基础",
                        "date": "2017 06-01",
                        "desc": "中国房地产业协会、上海易居房地产研究院中国房地产测评中心近日联合..."
                    },
                    {
                        "imgName": "news-03.jpg",
                        "title": "健身运动方法因人而异",
                        "date": "2017 06-01",
                        "desc": "29日港股交易中，中国恒大股价大涨近23%，再创反弹新高，碧桂园..."
                    },
                    {
                        "imgName": "news-04.jpg",
                        "title": "跆拳道准备姿势步法详细讲解",
                        "date": "2017 06-02",
                        "desc": "距离最严调控启动已有两个半月时间，在调控影响下，本应是购房黄金期..."
                    },
                    {
                        "imgName": "news-05.jpg",
                        "title": "跆拳道队金银铜全揽",
                        "date": "2017 06-03",
                        "desc": "“政府只要下定决心调控楼市，储备的调控手段有的是。”对于2017..."
                    },
                    {
                        "imgName": "news-06.jpg",
                        "title": "中资深耕海外仓库地产市场：乘“一带一路”东风",
                        "date": "2017 06-04",
                        "desc": "中国主权财富基金中投公司正酝酿大手笔收购伦敦仓储物业集团Logi..."
                    }
                ]
            },
            // 5. 教练团队
            "team": [
                {
                    "imgName": "team-01.jpg",
                    "name": "教练01",
                    "englishName": "Robert Lee",
                    "desc": "跆拳道培训经验九余年"
                },
                {
                    "imgName": "team-02.jpg",
                    "name": "教练02",
                    "englishName": "Kevin Kate",
                    "desc": "跆拳道培训经验十余年"
                },
                {
                    "imgName": "team-03.jpg",
                    "name": "教练03",
                    "englishName": "Michael Lucy",
                    "desc": "跆拳道培训经验十八余年"
                },
            ],
            // 6. 联系我们
            "contact": {
                "address": "苏州市金鸡湖大道00号",
                "zipCode": "200000",
                "phone": "400-8000-8000",
                "tel": "133-0000-0000",
                "fax": "000-8000-8000",
                "email": "info@email.com",
                "icons": [
                    "QQ.png",
                    "sina.png",
                    "wechat.png",
                    "facebook.png",
                    "twitter.png"
                ]
            }
        }
    }
}