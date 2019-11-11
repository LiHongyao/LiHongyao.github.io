/* 方法封装 */
/**
 * ajax for get
 * @param {资源地址} url 
 * @param {回调函数} callback 
 */
function GET(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onload = function () {
        if (this.status == 200) {
            callback && callback(this.response);
        }
    }
}

function $(sel, isAll) {
    if (isAll) {
        return document.querySelectorAll(sel);
    } else {
        return document.querySelector(sel);
    }
}

/**
 * 加载页面元素
 * @param {父级元素} parent 
 * @param {显示数据} response 
 */
function loadingHtml(parent, response) {
    var htmlStr = "";
    response.forEach(function (obj, index, arr) {
        htmlStr += `<li>
            <div class="top-bar" data-title="${obj.title}" data-url="${obj.videoUrl}" style="background:url('${obj.imgUrl}')">
                <img src="./images/play.png" alt="">
            </div>
            <div class="infos">
                <p class="title" data-title="${obj.title}" data-url="${obj.videoUrl}">${obj.title}</p>
                <p class="des">${obj.des}</p>
            </div>
        </li>`;

    })
    parent.innerHTML = htmlStr;
}