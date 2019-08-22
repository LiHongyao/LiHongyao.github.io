
function loadingHtml(oContentsBox, oNavBox) {
    for(var i = 0; i < jsonData.length; i++) {
        // 1、nav-box -> 创建a
        var oA = document.createElement('a');
        oA.setAttribute('href', 'javascript:void(0);');
        oA.setAttribute('class', 'nav-item');
        var oFig = document.createElement('figure');
        oFig.style.background = 'url("./images/' + jsonData[i]['navImg'] + '") no-repeat center';
        oA.appendChild(oFig);
        oA.appendChild(document.createTextNode(jsonData[i]['title']));
        oNavBox.appendChild(oA);
        // 2、contents -> 创建div
        var oDiv = document.createElement('div');
        oDiv.setAttribute('class', 'contents-item');

        // 左右盒子
        var oFl = document.createElement('div');
        var oFr = document.createElement('div');
        oFl.setAttribute('class', 'fl');
        oFr.setAttribute('class', 'fr');
        oFl.style.background = 'url("./images/' + jsonData[i]['desImg'] + '") no-repeat center';
        var innerHtml = '';
        innerHtml += '<img src="./images/' + jsonData[i]['navImg'] + '">';
        innerHtml += '<h3>' + jsonData[i]['title'] + '</h3>';
        innerHtml += '<p>' + jsonData[i]['des'] + '</p>';
        innerHtml += '<a href="javascript:void(0);">进一步了解</a>';
        oFr.innerHTML = innerHtml;
        oDiv.appendChild(oFl);
        oDiv.appendChild(oFr);

        if(i == 0) {
            oA.classList.add("active");
            oDiv.classList.add("show");
        }
        oContentsBox.appendChild(oDiv);
    }
}