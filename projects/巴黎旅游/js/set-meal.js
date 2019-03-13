$(function() {
    // 获取数据
    const data = Model.GET("setMeal");

    loadingTJList(); 
    function loadingTJList() {
        $(".tj-list").html((function() {
            let lis = data.map(item => `<li> 
                <div class="img">
                    <img src="../images/${item.imgUrl}">
                </div>
                <p class="title">${item.title}</p>
            </li>`);
            return lis.join("");
        })());
    }
});