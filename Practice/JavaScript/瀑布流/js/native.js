// 加载图片
let container = document.querySelector('.container');
loaddingImgs(container);
window.onload = function() {
    waterfall({
        parentSelector: '.container',
        itemSelector: '.item',
        columns: 5,
        gap: 10
    });
}
window.onresize = function() {
    waterfall({
        parentSelector: '.container',
        itemSelector: '.item',
        columns: 5,
        gap: 10
    });
}
/**
 * 加载图片数据
 */
function loaddingImgs(el) {
    let htmlStr = '';
    for (let i = 1; i <= 60; i++) {
        htmlStr += `<section class='item'>
        <img src='../images/${i}.jpeg' alt=''>
    </section>`
    }
    el.innerHTML = htmlStr;
}

/**
 * 瀑布流效果
 * @param {parentSelector} 容器选择器
 * @param {itemSelector} 元素选择器
 * @param {columns} 显示列数，默认值为2
 * @param {gap} 列间距，默认为10
 */
function waterfall({parentSelector,itemSelector, columns = 2, gap = 10}) {
    // 1. 获取元素
    let items = document.querySelectorAll(itemSelector);
    // 2. 计算并更新元素的宽度
    const containerWidth = document.querySelector(parentSelector).offsetWidth;
    // 元素宽度 = (容器 - （列数 - 1） * 间距) / 列数
    const itemWidth = (containerWidth - (columns - 1) * gap) / columns;
    items.forEach(element => {
        element.style.width = `${itemWidth}px`;
    });
    // 3.排版
    let arr = []; // 用于判断最小高度的数组
    for (let i = 0, len = items.length; i < len; i++) {
        if (i < columns) {
            // 对第一行图片进行布局
            items[i].style.top = 0;
            items[i].style.left = (itemWidth + gap) * i + 'px';
            arr.push(items[i].offsetHeight);
        } else {
            // 对接下来的图片进行定位
            // 首先要找到数组中最小高度和它的索引
            let index = arr.indexOf(Math.min(...arr));
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