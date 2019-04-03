
function loadingMenuList(menuList, response) {
    var htmlArr = [];
    response.forEach(function(menuItem) {
        htmlArr.push(`
            <li class="menu-item">
                <a class="menu-item-title" href="javascript:;">${menuItem.title}</a>
                ${(function(){
                    if(menuItem.contentlist) {
                        var menuItemContentStr = `<ul class="menu-item-content">`;
                        menuItem.contentlist.forEach(function(obj) {
                            menuItemContentStr += `
                                <li>
                                    ${(function(){
                                        if(obj.tag) {
                                            return `<span class="tag">${obj.tag}</span>`
                                        }else{
                                            return "";
                                        }
                                    })()}
                                    <img src="${menuItem.path + obj.img}">
                                    <p class="name">${obj.name}</p>
                                    <p class="price">${obj.price}</p>
                                </li>
                            `;
                        });
                        menuItemContentStr += `</ul>`;
                        return menuItemContentStr;
                    }else {
                        return "";
                    }
                })()}
            </li>
        `);
    });
    menuList.innerHTML = htmlArr.join("");
}


function updateMenuItemContentW(menuItemContents, width) {
    menuItemContents.forEach(function(menuItemContent) {
        menuItemContent.style.width = width + "px"; 
    })
}
