

(function main() {

    // 加载视图
    loadingGoods();
    loadingArticles();

    // 轮播效果
    flash($('.flash-item'));
    // 动画效果
    window.onscroll = function () {
        animations();
    }


    /**
     * 函数封装
     */
    function loadingGoods() {
        let datas = home_goods_datas;
        let $goodsList = $('.goods-list');
        let tags = [];
        for(let i = 0; i < datas.length; i++) {
            tags.push(`
                <li>
                    <div class="img">
                        <img src="imgs/index/${datas[i]['goodsImg']}" alt="">
                    </div>
                    <p class="goods-name">${datas[i]["goodsName"]}</p>
                    <p class="line"></p>
                    <p class="goods-price">${datas[i]["goodsPrice"]}</p>
                </li>
            `);
        }
        $goodsList.append($(tags.join("")));
    }
    function loadingArticles() {
        let datas = home_hotnews_datas;
        let $articles = $('.articles');
        let tags = [];
        for(let i = 0; i < datas.length; i++) {
            tags.push(`
                <div class="article-item">
                    <div class="article-img">
                        <img src="imgs/index/${datas[i]['imgName']}" alt="">
                    </div>
                    <div class="article-infos">
                        <h3 class="art-title">${datas[i]['title']}</h3>
                        <p class="art-date">${datas[i]['date']}</p>
                        <p class="art-des">${datas[i]['des']}</p>
                    </div>
                </div>
            `);
        }
        $articles.append($(tags.join("")));
    }
    function animations() {
        let wHeight = window.innerHeight;
        let offset  = document.body.scrollTop || document.documentElement.scrollTop;
        let moveAnimationEls = $(".left-move-animation");
        let scaleAnimationEls     = $(".scale-animations");
        for(let i = 0; i < moveAnimationEls.length; i++) {
            let moveOffsetTop  = moveAnimationEls[i].offsetTop;
            let scaleOffsetTop = scaleAnimationEls[i].offsetTop;

            if(wHeight + offset > moveOffsetTop) {
                moveAnimationEls[i].classList.add("move");
            }else {
                moveAnimationEls[i].classList.remove("move");
            }
            if(wHeight + offset > scaleOffsetTop) {
                scaleAnimationEls[i].classList.add("scale");
            }else {
                scaleAnimationEls[i].classList.remove("scale");
            }
        }
    }

})();








