
function tab(obj) {
    for(let i = 0, len = obj.menuItems.length; i < len; i++) {
        if(obj.menuItems[i].classList.contains("selected")) {
            obj.menuItems[i].classList.remove("selected");
            obj.contentItems[i].classList.remove("show");
            break;
        }
    }
    obj.menuItems[obj.curIndex].classList.add("selected");
    obj.contentItems[obj.curIndex].classList.add("show");
};


function play(obj) {
    obj.timer = setInterval(() => {
        obj.curIndex = obj.curIndex == 3 ? 0 : ++obj.curIndex;
        tab(obj);
        console.log(obj);
    }, 3000);
}


function stop(obj) {
    clearInterval(obj.timer);
    obj.timer = null;
}








