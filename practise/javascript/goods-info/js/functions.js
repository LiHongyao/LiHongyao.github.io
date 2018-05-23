

let getEl = (Sel) => {
    return document.querySelector(Sel);
}

let getStyle = (el, attr) => {
    if(el.currentStyle) {
        return el.currentStyle[attr];
    }else {
        return getComputedStyle(el, null)[attr];
    }
}



