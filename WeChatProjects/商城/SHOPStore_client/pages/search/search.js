
Page({
    data: {
        hots: ["夹克","双肩包", "运动鞋", "Jordan", "长裤"],
    },
    //=> events
    handleEvents(event) {
        // 获取关键字
        let keywords = event.type == "confirm" ? event.detail.value : event.target.dataset.text;
        wx.navigateTo({
            url: `../search-res/search-res?keywords=${keywords}`
        })
    }

});