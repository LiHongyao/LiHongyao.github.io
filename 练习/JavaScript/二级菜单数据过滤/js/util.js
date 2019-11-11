function ajax(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onload = function() {
        if(xhr.status == 200) {
            success && success(xhr.response);
        }
    }
}

function $(sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel);
}

function loadingMenus(el, datas) {
    var htmlStr = "";
    datas.forEach(function(obj) {
        htmlStr += `<li>
        <p class="item fir-menu-item">${obj.firMenu}</p>
        ${(function() {
            var s = "<ul class='sec-menu-list'>";
            if(obj.secMenu) {
                obj.secMenu.forEach(function(secMenu) {
                    s += `<li class="item sec-menu-item">${secMenu}</li>`
                });
                s += "</ul>";
                return s;
            }
            return "";
        })()}
        </li>`;
    })
    el.innerHTML = htmlStr;
}

function removeClass(elements, classname) {
    for(var i = 0, len = elements.length; i < len; i++) {
        if(elements[i].classList.contains(classname)) {
            elements[i].classList.remove(classname);
            break;
        }
    }

}

function loadingGoodsList(el, datas, keywords) {
    console.log(`数据过滤加载中,过滤关键字是： ${JSON.stringify(keywords)}`);
}