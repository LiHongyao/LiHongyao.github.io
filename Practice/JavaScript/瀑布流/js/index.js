

// 加载图片
let container = document.querySelector(".container");
loaddingImgs(container);
window.onload = function() {
    waterFull();
}


/**
 * 加载图片数据
 */
function loaddingImgs(el) {
    let htmlStr = "";
    for (let i = 1; i <= 30; i++) {
        htmlStr += `<section class="item">
        <img src="./images/${i}.jpeg" alt="">
    </section>`
    }
    el.innerHTML = htmlStr;
}



function waterFull() {
    const items = [...container.children];
    const columns = 3; // 列数
    const gap = 10; // 图片间距
    // 计算列数：得到列数 = 页面可视区域宽度 / 图片的宽度
    const pageWidth = getClient().width;
    const itemWidth = (pageWidth - (columns - 1) * gap) / columns;
    items.forEach(element => {
        element.style.width = `${itemWidth}px`;
    });
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

/**
 * 获取可视区域的尺寸
 */
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
/**
 * 获取窗口滚动的距离
 */
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}