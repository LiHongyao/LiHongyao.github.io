function loaddingHtml(callback) {
    // 1. 获取数据
    $.ajax({
        url: "../json/friends.json",
        success: function (data) {
            // 2. 渲染
            render(data, callback);
        }
    })

}
function render(data, callback) {
    // 1. 遍历数据
    let htmlStr = "";
    $(data).each((i, group) => {
        htmlStr += `<li>
            <section class="box">
                <p class="group-name">${group.groupname}</p>
                <p class="online">${(function() {
                    // 1. 在线人数/总人数
                    let count = $(group.infos).filter((index, friend) => {
                        return friend.status != "离线";
                    }).length;
                    return `${count}/${group.infos.length}`;
                })()}</p>
            </section>
            <ul class="friend-list">${(function() {
                let friendStr = "";
                $(group.infos).each((j, friend) => {
                    friendStr += `<li>
                        <div class="img" style="background: url('${friend.img}') no-repeat center center;"></div>
                        <div class="infos">
                            <p class="item">
                                <span class="nikename ${(function() {
                                    return friend.vip ? "VIP" : "";
                                })()}">${friend.nikename}</span>
                                ${(function() {
                                    return friend.vip ? `<span class="vip">SVIP</span>` : "";
                                })()}
                            </p>
                            <p class="item">
                                <span class="status">[${friend.status}]</span>
                                <span class="signature">${friend.signature}</span>
                            </p>
                        </div>
                    </li>`;
                })
                return friendStr;
            })()}</ul>
        </li>`;
    });
    $(".group-list").html(htmlStr);
    callback && callback();
}