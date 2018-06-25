var model = {
    path: "../images/",
    books: [], // 显示数据
    originBooks: [] // 源数据
};
new Vue({
    el: "#app",
    data: model,
    mounted() {
        // 记录this
        let _this = this;
        $.ajax({
            url: "../json/book-info.json",
            type: "GET",
            dataType: "json",
            success: (response) => {
                // 更新数据层
                _this.books = response;
                _this.originBooks = response;
            }
        });
    },
    methods: {
        // 点击搜索按钮
        searchBtnClick() {
            // 获取搜索关键字
            let keywords = $(".search").val();
            // 根据搜索关键字生成正则表达式
            let reg = new RegExp(keywords, "i");
            // 在源数据中进行搜索
            this.books = this.originBooks.filter((book) => {
                return reg.test(book.name); 
            });
        },
        // 显示书本详情
        showBookDetails(e) {
            let $target  = $(e.target.parentElement);
            let index = $target.index();
            sessionStorage.bookinfos = JSON.stringify(this.books[index]);
            location.href = "../pages/bookdetails.html";
        }
    }
});