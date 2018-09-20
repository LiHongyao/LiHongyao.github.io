/**
 * 数据加载
 * @param el    依赖元素
 * @param goods 加载数据
 */
function loading(el, goods) {
    let _tmp  = [];
    goods.forEach(function (good, index) {
        _tmp[index] = createHtmls(good, index + 1);
    });
    el.insertAdjacentHTML("beforeend", _tmp.join(""));
}


/**
 * 标签拼接
 * @param good        拼接数据
 * @param idx         序号下标
 * @returns {string}  拼接标签字符串
 */
function createHtmls(good, idx) {
    return  '<div class="tr">' +
            '<div class="td">' + idx              + '</div>' +
            '<div class="td">' + good.goodsNum    + '</div>' +
            '<div class="td">' + good.goodsName   + '</div>' +
            '<div class="td">' + good.goodsType   + '</div>' +
            '<div class="td">' + good.goodsStock  + '</div>' +
            '<div class="td">' + good.goodsPrice  + '</div>' +
            '<div class="td">' + good.goodsTips   + '</div>' +
            '<div class="td">' + good.updatedTime + '</div>' +
            '<div class="td" id="btn-wrap">' +
            '<span class="btn edit" data-idx="'   + (idx - 1) + '">编辑</span>' +
            '<span class="btn delete" data-idx="' + (idx - 1) + '">删除</span>' +
            '</div>' +
            '</div>';
}

/**
 * 显示遮罩
 * @param mask 遮罩对象
 */
function showMask(mask) {
    mask.classList.add("mask-show");
}

/**
 * 隐藏遮罩
 * @param mask 遮罩对象
 */
function closeMask(mask) {
    mask.classList.remove("mask-show");
}













