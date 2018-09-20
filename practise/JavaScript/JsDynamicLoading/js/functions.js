
function loadingTeam() {
    // 获取容器
    var oWrap   = document.querySelector('.ct-list');
    // 定义变量存储拼接的子元素标签
    var htmlStr = "";
    // 遍历数据
    model.ctList.forEach(function(obj-) {
        // 拼接子节点li
        htmlStr += 
            `<li>
                <img src="./images/${obj.imgName}">
                <div class="box">
                    <p class="name">${obj.name}</p>
                    <p class="des">${obj.des}</p>
                </div>
            </li>`;
    });
    // 将子节点添加至容器中
    oWrap.innerHTML = htmlStr;
}