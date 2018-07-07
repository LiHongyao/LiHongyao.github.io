
(function() {
    let tool = new Tool();
    tool.sayHello();

    let menuItems = document.querySelectorAll('.menu-list a');
    for(let i = 0, len = menuItems.length; i < len; i++) {
        menuItems[i].onclick = function() {
            console.log(this.textContent);
        }
    }
})();
