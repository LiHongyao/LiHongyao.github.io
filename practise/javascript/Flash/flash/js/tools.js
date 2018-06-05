function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

function getStyle(el, attr) {
    if(el.currentStyle) {
        return el.currentStyle[attr];
    }else {
        return getComputedStyle(el, null)[attr];
    }
}

