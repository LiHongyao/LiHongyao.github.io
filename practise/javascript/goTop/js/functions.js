
/**
 * 回到顶部
 * 
 * @param {Object} configs 配置项
 * {
 *      el: 触发元素
 *      duration: 回到顶部持续时间
 *      pageScroll: 滚动时的回调
 *      complete: 滚动结束时的回调
 * }
 */
let scrollToTop = (configs) => {
    // 1. 默认处理
    if(!configs.el) { 
        // 抛出异常
        throw "[回到顶部功能]：缺省必须的触发节点元素参数";
    }
    configs.duration = configs.duration || 1000;
    // 2. 定义变量
    let offset = 0;
    // 3. 页面滚动
    window.onscroll = () => {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        configs.pageScroll && configs.pageScroll(offset);
    };
    // 4. 点击回到顶部按钮
    configs.el.onclick = () => {
        // 帧动画原理
        // 位移距离/持续时间/每一帧持续时间/有多少帧
        let interval = 15;
        let speed = Math.ceil(offset / (configs.duration / interval));
        let t = setInterval(()=> {
            if(offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }else {
                clearInterval(t);
                t = null;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                configs.complete && configs.complete();
            }
        }, interval);
    };
};






