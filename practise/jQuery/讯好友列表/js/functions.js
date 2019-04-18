

// 获取数据
let get = (callback) => {
    $.ajax({
        url: "../json/friends.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            callback && callback(response);
        }
    })
}

// 加载元素
let loadingHtml = (data) => {
    let groupHtmlStr = "";
    data.forEach(group => {
        groupHtmlStr += `
            <ul class="group">
                <li class="group-name">
                    <i class="iconfont arrow">&#xe75c;</i>
                    ${group.groupname}
                    <span class="online">${(function() {
                        let nums  = group.infos.length;
                        let count = 0;
                        group.infos.forEach((friend) => {
                            if(friend.status != "离线") {
                                count++;
                            }
                        });
                        return `${count}/${nums}`;
                    })()}</span>
                </li>
                <ul class="friends-list">
                    ${(function(){
                        var htmlStr = "";
                        group.infos.forEach(friend => {
                            htmlStr += `
                                <li class="friend">
                                    <div class="head-portrait" style="background: url(${friend.img}) no-repeat top center"></div>
                                    <div class="infos">
                                        <p class="nikename ${friend.vip ? 'vip' : ''}">${friend.nikename} ${friend.vip ? "<i class='iconfont icon'>&#xe65e;</i>" : ""}</p>
                                        <p class="des">[${friend.status}] ${friend.signature}</p>
                                    </div>
                                </li>
                            `;
                        });
                        return htmlStr;
                    })()}
                </ul>
            </ul>`
    });
    $(".friends").html(groupHtmlStr);
}



