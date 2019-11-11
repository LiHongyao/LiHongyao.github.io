(function() {
    // 1. 加载主页数据
    var oWrap       = document.querySelector('.content');
    var detailsPage = document.querySelector('.details-page');
    var backBtn     = document.querySelector('.back-btn');
    var ctLeft      = document.querySelector('.details-page .left');
    var ctRight     = document.querySelector('.details-page .right');
    var authorBox   = document.querySelector('.author-itc');
    var ctBox       = document.querySelector('.ct-itc');
    var baseURL     = "https://api.douban.com/v2/book/";
    $.ajax({
        url: '../json/books.json',
        success: function(books) {
            // 显示数据
            var htmlStr = "";
            books.forEach(function(book) {
                htmlStr += `
                <section class="book" data-bookid=${book.bookid}>
                    <img src=${book.img} alt="">
                    <p class="bookname">${book.bookname}</p>
                    <p class="author">${book.author}</p>
                </section>`;
            });
            oWrap.innerHTML = htmlStr;
            // 为书籍添加点击事件
            var bookItems = Array.from(document.querySelectorAll('.book'));
            bookItems.forEach(function(bookItem) {
                bookItem.onclick = function() {
                    detailsPage.classList.add('show');
                    loadingInfos(JSON.parse(localStorage.bookinfo));
                    // 加载详情数据
                    $.ajax({
                        url: baseURL + this.dataset.bookid,
                        dataType: 'jsonp',
                        success: function(bookinfo) {
                            // 临时存储到本地/因为豆瓣喜欢装怪
                            localStorage.bookinfo = JSON.stringify(bookinfo);
                            loadingInfos(bookinfo);
                        }
                    })
                }
            });
        }
    });

    // 点击返回按钮
    backBtn.onclick = function() {
        detailsPage.classList.remove('show');
    }

    function loadingInfos(bookinfo) {
        // 展示数据
        ctLeft.innerHTML  = `<img src=${bookinfo.image}>`;
        ctRight.innerHTML = `
            <p>书名：${bookinfo.title}</p>
            <p>作者：${bookinfo.author.join(" ")}</p>
            <p>价格：¥${bookinfo.price}</p>
            <p>电子书价格：¥${bookinfo.ebook_price}</p>
            <p>装帧：¥${bookinfo.binding}</p>
            <p>页数：¥${bookinfo.pages}</p>
            <p>出版社：${bookinfo.publisher}</p>
            <p>出版日：${bookinfo.pubdate}</p>`;
        authorBox.textContent = bookinfo.author_intro;
        ctBox.textContent = bookinfo.catalog;  
    }
})();
