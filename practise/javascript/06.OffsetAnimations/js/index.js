
(function () {

    var kHeight     = window.innerHeight,
        offset      = 0,
        items       = $.get(".list-item"),
        offsetTops  = [];
    for(var i = 0, len = items.length; i < len; i++) {
        offsetTops[i] = items[i].offsetTop;
    }

    $.addEvent(window, "scroll", function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        for(var i = 0, len = items.length; i < len; i++) {
            if(kHeight + offset > offsetTops[i]) {
                items[i].classList.add("running");
            }
        }
    });
})();