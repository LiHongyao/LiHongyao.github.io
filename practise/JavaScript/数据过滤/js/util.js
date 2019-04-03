
/**
 * 移除class
 * @param {element} elements 元素集合
 * @param {string} className 要移除的类名
 */
function removeClass(elements, className) {
    for(var i = 0, len = elements.length; i < len; i++) {
        if(elements[i].classList.contains(className)) {
            elements[i].classList.remove(className);
            break;
        }
    }
}

/**
 * get 请求
 * @param {string} url 请求地址
 * @param {function} success 请求成功回调
 * @param {function} fail  请求失败回调
 */
function GET(url, success, fail) {
    // 创建请求对象
    var xhr = new XMLHttpRequest();
    // 配置请求对象
    xhr.open("GET", url, true);
    // 设置请求超时
    xhr.timeout = 10;
    // 设置响应数据类型
    xhr.responseType = 'json';
    // 发送请求
    xhr.send();
    // 监听
    xhr.onload = function() {
        if(xhr.status == 200) {
            success(xhr.response);
        }else {
            fail();
        }
    }
}


/**
 * 异步加载
 * @param {element} goodsList 父节点
 * @param {array} datas 数据
 * @param {object} keywords 关键词
 */
function loadingGoodsList(goodsList, datas, keywords) {
    // 创建正则表达式 
    var reg    = new RegExp(`.*${keywords.kind}.*${keywords.origin}.*${keywords.color}`);
    // 根据正则表达式过滤数据
    var resArr = datas.filter(function(goods) {
        return reg.test(JSON.stringify(goods));
    });
    var htmlArr = [];
    resArr.forEach(function(goods, index) {
        htmlArr[index] = `
            <li>
                <img src="./images/${goods.imgName}" alt="">
                <p class="price">${goods.price}</p>
                <p class="name">${goods.name}</p>
            </li>`;
    });
    goodsList.innerHTML = htmlArr.join("");
}
