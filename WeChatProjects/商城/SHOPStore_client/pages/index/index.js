import {
    url
} from "../../utils/util"
// 获取App
const app = getApp()

Page({
    // Model
    data: {
        url,
        banner: [],
        commodities: []
    },
    //=> 生命周期
    onLoad() {
        this.request();
    },
    //=> events
    handleItemTap(event) {
        // 获取参数
        let { i, j } = event.currentTarget.dataset;
        // 获取商品id
        let {commodities} = this.data;
        let id = commodities[i]["contents"][j].id;
        // 跳转至详情页
        wx.navigateTo({
            url: `../details/details?id=${id}`
        });
    },
    //=> methods
    request() {
        // 请求banner
        wx.request({
            url: `${url}/banner`,
            success: res => {
                this.setData({
                    banner: res.data.data
                })
            }
        });
        // 请求commodities
        this.commodities("sale", "热销").then(() => {
            this.commodities("clothes", "衣服").then(() => {
                this.commodities("pants", "裤子").then(() => {
                    this.commodities("shoes", "鞋子").then(() => {
                        this.commodities("packages", "包包");
                    })
                })
            })
        });
    },
    commodities(kind, title) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${url}/commodities?kind=${kind}`,
                success: res => {
                    let { commodities } = this.data;
                    commodities.push({
                        title,
                        contents: res.data.data
                    });
                    this.setData({
                        commodities
                    })
                    resolve();
                }
            });
        })
    }
})