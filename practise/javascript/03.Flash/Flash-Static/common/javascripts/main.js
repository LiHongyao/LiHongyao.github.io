/**
 * Created by LiHongyao on 2017/5/17.
 */


var oPrev  = document.getElementsByClassName('prev')[0];
var oNext  = document.getElementsByClassName('next')[0];
var oUl    = document.getElementsByClassName('detail-list')[0];
var aIdots = document.getElementsByClassName('idot-item');

var curImgIdx   = 0;
var isAnimating = false;

/**
 * 事件添加
 */
oPrev.onclick = function () {
    if(curImgIdx == 0 || isAnimating) {return;}
    curImgIdx--;
    tab(295);
    changeIdots();
}
oNext.onclick = function () {
    if(curImgIdx == oUl.childElementCount - 1 || isAnimating) {return;}
    curImgIdx++;
    tab(-295);
    changeIdots();
}

for(var i = 0; i < aIdots.length; i++) {
    aIdots[i].idx = i;
    aIdots[i].onclick = function () {
        if(this == aIdots[curImgIdx] || isAnimating) {return;}
        var offset = -295 * (this.idx - curImgIdx);
        curImgIdx = this.idx;
        tab(offset);
        changeIdots();
    }
}

/**
 * 函数封装
 */

function tab(offset) {
    isAnimating = true;
    var curLeft = parseInt(getStyle(oUl, 'left'));
    var desLeft = curLeft + offset;

    var duration = 500;
    var interval = 20;
    var speed    = Math.ceil(offset / (duration / interval));
    var t = setInterval(function () {
        curLeft = parseInt(getStyle(oUl, 'left'));
        if((offset > 0 && curLeft < desLeft) || (offset < 0 && curLeft > desLeft)) {
            oUl.style.left = curLeft + speed + 'px';
        }else {
            clearInterval(t);
            isAnimating = false;
            oUl.style.left = desLeft + 'px';
        }
    }, interval);
}

function changeIdots() {
    for(var i = 0; i < aIdots.length; i++) {
        if(aIdots[i].classList.contains('active')) {
            aIdots[i].classList.remove('active');
            break;
        }
    }
    aIdots[curImgIdx].classList.add('active');
}

function getStyle(element, attr) {
    if(element.currentStyle) {
        return element.currentStyle[attr];
    }else {
        return getComputedStyle(element, null)[attr];
    }
}























