import {
    url
} from '../../utils/util.js'
Page({
    data: {
        source: [], // 搜索数据源
        arr: [], // 搜索结果
        keywords: "", // 搜索关键字
        navH:0, // 导航栏高度
        url
    },
    onLoad(options) {
        // 读取搜索关键字
        let { keywords } = options;
        this.setData({
            keywords
        });
        // 获取搜索数据源
        this.getSource().then(res => {
            this.setData({
                source: res
            });
            // 开始搜索
            this.search();
        });

    },
    // => events
    handleItemTap(event) {
       let {index} = event.currentTarget.dataset;
       let { id } = this.data.arr[index];
        // 跳转至详情页
        wx.navigateTo({
            url: `../details/details?id=${id}`
        });
    },
    handleKeywordsChange(event) {
        let { keywords } = event.detail;
        this.setData({
            keywords
        });
        this.search();
    },
    handleNavSize(event) {
        let {navH} = event.detail;
        this.setData({
            navH
        })
    },
    // => methods 
    search() {
        let { source, keywords, arr } = this.data;
        let reg = new RegExp(keywords, "i");
        // 搜索数据
        arr = source.filter(item => {
            return reg.test(JSON.stringify(item));
        });
        // 更新搜索结果
        let noData = arr.length < 0;
        this.setData({
            arr
        });
    },
    getSource() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${url}/commodities`,
                success: res => {
                    resolve(res.data.data);
                }
            })
        })
    }
});

// wx.getMenuButtonBoundingClientRect()
// wx.getSystemInfo()