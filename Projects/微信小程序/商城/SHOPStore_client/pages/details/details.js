import {
    url
} from '../../utils/util.js'
// 获取App 
const app = getApp();
Page({
    data: {
        content: {},
        colors: [], 
        sizes: [],
        order: {
            num: 1
        },
        shoppingCart: []
    },
    onLoad(options) {
        let { id  } = options;
        this.request(id);
        let { username } = app.globalData.loginUser;
        this.setData({
            [`order.username`]: username,
            shoppingCart: app.globalData.shoppingCart
        });
    },
    onUnload() {
        
    },
    // => events
    handleSelectorChange(event) {
        let { text } = event.detail;
        let { id } = event.target;
        // 如果data是对象，赋值起属性值是可把key定义成字符串来x
        this.setData({
            [`order.${id}`]:text
        });
    },
    handleNumChange(event) {
        let { num } = event.detail;
        this.setData({
            [`order.num`]:num
        });
    },
    handleInsert() {
        let { shoppingCart } = this.data;
        let {size, color, num, price, title} = this.data.order;
        if(!size || !color) {
            wx.showToast({
                title: '请完善商品信息！',
                icon: 'none',
                duration: 500
            })
            return;   
        }
        // 设置总价
        this.setData({
            [`order.total`]: num * price
        });
        // 判断购物车是否已经存在，如果存在则数量相加
        // 否则直接添加进购物车
        let flag = false;
        for(let i = 0, len = shoppingCart.length; i < len; i++) {
            let obj = shoppingCart[i];
            if(obj.title == title && obj.size == size && obj.color == color) {
                obj.num += num;
                flag = true;
                break;
            }
        }
        if(!flag) {
            shoppingCart.push({
                ...this.data.order
            });
        }
        wx.showToast({
            title: '已加入购物车！',
            icon: 'success',
            duration: 500
        })
    },
    // => methods
    request(id) {
        wx.request({
            url: `${url}/commodities?id=${id}`,
            success: res => {
                let content = res.data.data[0];
                let colors = content.color.split("、");
                let sizes  = content.size.split("、");

                let keys = ["title", "des", "price", "imgUrl"];
                let order = {};
                for (let key of keys) {
                    order[key] = content[key];
                }
                this.setData({ 
                    sizes, 
                    colors, 
                    content,
                    order: {...this.data.order, ...order}
                });
            }
        });
    }
});