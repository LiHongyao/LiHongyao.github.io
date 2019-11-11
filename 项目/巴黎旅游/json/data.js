// 所有景点数据
const attractions = {
    "types": [
        {"text":"所有景点", "type": 1},
        {"text":"第2区", "type": 2},
        {"text":"第3区", "type": 3},
        {"text":"第5区", "type": 5},
        {"text":"第8区", "type": 8},
        {"text":"第9区", "type": 9}
    ],
    "contentlist": [
        {
            "imgUrl": "attractions_01.jpg", 
            "name":"卢浮宫",
            "rating":"★★★★★",
            "type": 2
        },
        {
            "imgUrl": "attractions_02.jpg", 
            "name":"蓬皮杜中心",
            "rating":"★★★★",
            "type": 3
        },
        {
            "imgUrl": "attractions_03.jpg", 
            "name":"塞纳河",
            "rating":"★★★★★",
            "type": 5
        },
        {
            "imgUrl": "attractions_04.jpg", 
            "name":"巴黎圣母院",
            "rating":"★★★",
            "type": 5
        },
        {
            "imgUrl": "attractions_05.jpg", 
            "name":"凯旋门",
            "rating":"★★★★★",
            "type": 9
        },
        {
            "imgUrl": "attractions_06.jpg", 
            "name":"圣心大教堂",
            "rating":"★★★",
            "type": 8
        },
        {
            "imgUrl": "attractions_07.jpg", 
            "name":"凡尔赛宫",
            "rating":"★★★★★",
            "type": 2
        },
        {
            "imgUrl": "attractions_08.jpg", 
            "name":"埃菲尔铁塔",
            "rating":"★★★★★",
            "type": 2
        },
        {
            "imgUrl": "attractions_09.jpg", 
            "name":"奥赛博物馆",
            "rating":"★★★★★",
            "type": 3
        }
    ]
};
// 套餐推荐
const setMeal = [
    {
        "imgUrl":"attractions_01.jpg",
        "title":"卢浮宫 · 一日游"
    },
    {
        "imgUrl":"attractions_04.jpg",
        "title":"巴黎圣母院 · 三日游"
    },
    {
        "imgUrl":"attractions_07.jpg",
        "title":"凡尔赛宫 · 五日游"
    },
    {
        "imgUrl":"attractions_08.jpg",
        "title":"埃菲尔铁塔 · 半日游"
    },
    {
        "imgUrl":"attractions_02.jpg",
        "title":"蓬皮杜中心 · 两日游"
    },
    {
        "imgUrl":"attractions_03.jpg",
        "title":"塞拉河 · 一日游"
    },

]
// 客户反馈
const feedback = [
    {
        "imgUrl": "customer_01.jpg",
        "name":"露娜",
        "level": "VIP 2",
        "desc":"当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。"
    },
    {
        "imgUrl": "customer_02.jpg",
        "name":"宫本武藏",
        "level": "VIP 8",
        "desc":"当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。"
    },
    {
        "imgUrl": "customer_03.jpg",
        "name":"奥利安娜",
        "level": "VIP 6",
        "desc":"当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。"
    },
    {
        "imgUrl": "customer_04.jpg",
        "name":"瑞兹",
        "level": "VIP 8",
        "desc":"当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。"
    }
]

class Model {
    static GET(key) {
        switch(key) {
            case "attractions": 
                return attractions;
            case "setMeal":
                return setMeal;
            case "feedback": 
                return feedback;
            default: 
                return "数据参数异常，获取失败！"
        }
    }
};
