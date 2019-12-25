Component({
    options: {
        // 设置样式穿透
        styleIsolation: "apply-shared"
    },
    properties: {
        num: {
            type: Number, // 类型
            value: 1 // 默认值
        },
        max: {
            type: Number,
            value: 10
        }
    },
    data: {
        minusStatus: 'disabled',
        plusStatus: 'normal'
    },
    methods: {
        handleTap(event) {
            let { id } = event.target;
            let { num, max } = this.properties;
            switch(id) {
                // 点击加号
                case "plus": {
                    if (num < max) {
                        num++;
                    }else {
                        return;
                    }
                }break;
                // 点击减号
                case "minus": {
                    // 如果大于1时，才可以减  
                    if (num > 1) {
                        num--;
                    }else {
                        return;
                    }
                }break;
            }
            // 修改状态 
            let minusStatus = num <= 1 ? 'disabled' : 'normal';
            let plusStatus = num >= max ? 'disabled' : 'normal';
            // 将数值与状态写回  
            this.setData({
                num,
                minusStatus,
                plusStatus
            });
            this.triggerEvent("change", {num});
            
        },
        /* 输入框事件 */
        bindManual (event) {
            let { max } = this.properties;
            let num  = event.detail.value;
            if(num < 1) {
                num = 1;
            }else if(num > max) {
                num = max;
            }
            // 将数值与状态写回  
            this.setData({
                num
            });
            this.triggerEvent("change", { num });
        }  
    }
})
