/**
 * Created by LiHongyao on 2017/5/18.
 */

(function(){

    var oNavBox      = document.getElementsByClassName('nav-box')[0];
    var oContentsBox = document.getElementsByClassName('contents-box')[0];

    loadingHtml(oContentsBox, oNavBox);
    
    var aNavItems     = oNavBox.children;
    var aContentItems = oContentsBox.children;
    var curIndex = 0;

    
    for(var i = 0, len = aNavItems.length; i < len; i++) {
        aNavItems[i].dataset.index = i;
        aNavItems[i].onclick = function() {
            var index = this.dataset.index;
            if(index == curIndex) {
                return;
            }
            curIndex = index;
            for(var j = 0, len = aNavItems.length; j < len; j++) {
                if(aNavItems[j].classList.contains("active")) {
                    aNavItems[j].classList.remove("active");
                    aContentItems[j].classList.remove("show");
                    break;
                }
            }
            aNavItems[curIndex].classList.add("active");
            aContentItems[curIndex].classList.add("show");
        }
    }
})();


























