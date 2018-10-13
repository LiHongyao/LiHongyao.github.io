/**
 * 事件添加（兼容IE浏览器）
 * @param el        事件对象
 * @param type      事件类型
 * @param callBack  事件回调（监听函数）
 */
function addEvent(el, type, callBack) {
    if (el.attachEvent) {
        el.attachEvent('on' + type, callBack);
    } else {
        el.addEventListener(type, callBack, false);
    }
}

function loadingMembers(parentNode, infoObj, memberName, memberTel, addBtn) {
    var htmlArr = [];
    for(var i = 0, len = infoObj.members.length; i < len; i++) {
        htmlArr[i] += '<li class="member-item">';
        htmlArr[i] += '<span class="name">' + infoObj.members[i].name + '</span>';
        htmlArr[i] += '<span class="tel">' + infoObj.members[i].tel + '</span>';
        htmlArr[i] += '<section class="btn-box">';
        htmlArr[i] += '<span class="modify-btn hover-btn btn">修改</span>';
        htmlArr[i] += '<span class="delete-btn hover-btn btn">删除</span>';
        htmlArr[i] += '</section>';
        htmlArr[i] += ' </li>';
    }
    parentNode.innerHTML = htmlArr.join("");
    // 处理编辑和删除
    var modifyBtns  = document.getElementsByClassName('modify-btn');
    var deleteBtns  = document.getElementsByClassName('delete-btn');
    var memberItems = document.getElementsByClassName('member-item');
    for(var i = 0, len = modifyBtns.length; i < len; i++) {
        modifyBtns[i].dataset.index = i;
        deleteBtns[i].dataset.index = i;
        addEvent(modifyBtns[i], "click", function() {
            var index = this.dataset.index;
            memberName.value = infoObj.members[index].name;
            memberTel.value  = infoObj.members[index].tel;
            addBtn.textContent = "确认修改";
            addBtn.dataset.index = index;
        });
        addEvent(deleteBtns[i], "click", function() {
            var index = this.dataset.index;
            infoObj.members.splice(index, 1);
            memberItems[index].remove();
        });
    }

}
