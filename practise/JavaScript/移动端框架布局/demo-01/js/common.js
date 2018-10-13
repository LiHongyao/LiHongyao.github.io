function changeTitle(title) {
    var titleItem  = document.querySelector('.title');
    titleItem.textContent = title;
}
function goRootPage() {
    changeTitle("主页");
    var pageWrap = document.querySelector('.page-wrap');
    var tabBar   = document.querySelector('.tab-bar');
    var goBackBtn     = document.querySelector('.back-btn');
    var detailsPage = document.querySelector('.details-page');
    pageWrap.style.height = "calc(100% - 49px - 64px)";
    tabBar.style.display = "flex";
    goBackBtn.style.display = "none";
    detailsPage.classList.remove("show");
}
function goDetails() {
    changeTitle("详情页");
    var pageWrap = document.querySelector('.page-wrap');
    var tabBar   = document.querySelector('.tab-bar');
    var goBackBtn    = document.querySelector('.back-btn');
    var detailsPage = document.querySelector('.details-page');

    tabBar.style.display = "none";
    pageWrap.style.height = "calc(100% - 49px)";
    goBackBtn.style.display = "block";
    detailsPage.classList.add("show");
}