$(function() {
    // 获取数据
    const data = Model.GET("feedback");
    loadingCtList();


    function loadingCtList() {
        $(".ct-list").html((function() {
            let lis = data.map(
                item => `<li>
                    <img src="../images/${item.imgUrl}">
                    <div class="infos">
                        <p class="name">${item.name}</p>
                        <p class="level">${item.level}</p>
                        <p class="desc">${item.desc}</p>
                    </div>
                </li>`
            );
            return lis.join("");
        })());
    }
});

