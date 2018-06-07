
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

function GET(config) {
    // 创建请求对象
    var xhr = new XMLHttpRequest();
    // 配置请求
    xhr.timeout = 10;
    xhr.responseType = "json";
    xhr.open("GET", config.url, true);
    // 发送请求
    xhr.send(null);
    // 请求完成
    xhr.onload = function() {
        // 请求成功
        if(xhr.status == 200) {
            config.success && config.success(xhr.response);
        }
        // 请求失败
        else {
            config.fail && config.fail(); 
        }
    }
}


function loadingHtml(parent, data, curIndex) {
    // 获取总页码
    var totalPage = Math.ceil(data.length / 10);
    var starIndex = (curIndex - 1) * 10;
    var endIndex  = curIndex == totalPage ? starIndex + totalPage % 10 - 2 : starIndex + 9;
    var htmlStr = "";
    for(var i = starIndex; i <= endIndex; i++) {
        console.log(i);
        htmlStr += `
            <li>
                <p class="title">${data[i].title}</p>
                <p class="time">${data[i].time}</p>
            </li>
        `;
    }
    parent.innerHTML = htmlStr;
}

