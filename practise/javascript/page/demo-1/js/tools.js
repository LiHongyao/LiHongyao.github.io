
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

function loadingHtml(parent, data, curIndex) {
    // 获取总页码
    var totalPage = Math.ceil(data.length / 10);
    var starIndex = (curIndex - 1) * 10;
    var endIndex  = curIndex == totalPage ? starIndex + totalPage % 10 - 2 : starIndex + 9;
    var htmlStr = "";
    for(var i = starIndex; i <= endIndex; i++) {
        htmlStr += `
            <li>
                <p class="title">${data[i].title}</p>
                <p class="time">${data[i].time}</p>
            </li>
        `;
    }
    parent.innerHTML = htmlStr;
}

