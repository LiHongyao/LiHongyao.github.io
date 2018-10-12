function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }
    return document.querySelector(Sel);
}

function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}
