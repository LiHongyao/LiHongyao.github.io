
function removeClass(elements, className) {
    for(var i = 0, len = elements.length; i < len; i++) {
        if(elements[i].classList.contains(className)) {
            elements[i].classList.remove(className);
            break;
        }
    }
}
function GET(url, success, fail) {
    console.log("数据加载中，请稍后...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.timeout = 10;
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        if(xhr.status == 200) {
            success(xhr.response);
        }else {
            fail();
        }
    }
}


function loadingGoodsList(goodsList, datas, keywords) {
    var reg    = new RegExp(`.*${keywords.kind}.*${keywords.origin}.*${keywords.color}`);
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
