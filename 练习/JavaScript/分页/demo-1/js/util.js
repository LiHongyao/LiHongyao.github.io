/**
 * 加载数据
 */
function loadingInfos(infos, curPage, totalPage) {
    // 获取开始下标
    var startIndex = (curPage - 1) * 10;
    // 获取结束下标
    var endIndex   = curPage == totalPage ?  startIndex + infos.length % 10 - 1 : startIndex + 9;
    var htmlStr    = "";
    for(var i = startIndex; i <= endIndex; i++) {
        htmlStr += `<li>
            <div class="infos">
                <p class="tag">NEWS</p>
                <p class="ct">${infos[i].title}</p>
            </div>
            <p class="time">${infos[i].time}</p>
        </li>`;
    }
    getEl(".info-list").innerHTML = htmlStr;
} 





