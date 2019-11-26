class LHYWaterFull {
    constructor(options) {
        let defaultOptions = {
            items: [],
            itemWidth: 250,
            gap: 10,
        }
        Object.assign(defaultOptions, options);
        Object.prototype = defaultOptions;
    }
    waterFull(options) {
        // 计算列数：得到列数 = 页面可视区域宽度 / 图片的宽度
        const pageWidth = this.getClient().width;
        const itemWidth = imgWidth;
        const columns = parseInt(pageWidth / (itemWidth + gap));
        // 用于判断最小高度的数组
        let arr = [];
        for (let i = 0, len = items.length; i < len; i++) {
            if (i < columns) {
                // 对第一行图片进行布局
                items[i].style.top = 0;
                items[i].style.left = (itemWidth + gap) * i + 'px';
                arr.push(items[i].offsetHeight);
            } else {
                // 对接下来的图片进行定位
                // 首先要找到数组中最小高度和它的索引
                let minHeight = arr[0];
                let index = 0;
                for (let j = 0; j < arr.length; j++) {
                    if (minHeight > arr[j]) {
                        minHeight = arr[j];
                        index = j;
                    }
                }
                // 设置下一行的第一个盒子位置
                // top值就是最小列的高度 + gap
                items[i].style.top = arr[index] + gap + 'px';
                // left值就是最小列距离左边的距离
                items[i].style.left = items[index].offsetLeft + 'px';

                // 修改最小列的高度 
                // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                arr[index] = arr[index] + items[i].offsetHeight + gap;
            }
        }
    }
    getClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
    getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
};
export default LHYWaterFull;


