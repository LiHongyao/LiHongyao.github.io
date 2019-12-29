import {
    URL
} from "../../utils/util.js";
Page({
    data: {
        URL,
        funcs: [{
                "icon": "../../assets/setting.png",
                "text": "设置"
            },
            {
                "icon": "../../assets/card-bag.png",
                "text": "卡包"
            },
            {
                "icon": "../../assets/collection.png",
                "text": "收藏"
            },
            {
                "icon": "../../assets/feedback.png",
                "text": "反馈"
            },
            {
                "icon": "../../assets/find.png",
                "text": "发现"
            },
            {
                "icon": "../../assets/about.png",
                "text": "关于"
            },
            {
                "icon": "../../assets/expression.png",
                "text": "表情"
            },
        ]
    },

    onLoad: function(options) {

    },
    // => Events
    handleItemTap(event) {
        let { title } = event.currentTarget.dataset;
        let router = {
            "设置": "../setting/setting",
            "关于": "../about/about",
            "反馈": "../feedback/feedback"
        }
        if(router[title]) {
            wx.navigateTo({
                url: router[title]
            })
        }else {
            wx.showToast({
                title: '功能暂未开发!',
                icon: 'none',
                duration: 500,
                mask: true,
            })
        }  
    }
})