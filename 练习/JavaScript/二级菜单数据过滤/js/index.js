(function() {
    // 请求菜单数据
    ajax("../json/data.json", function(response) {
        // 加载菜单
        loadingMenus($(".fir-menu-list"), response);

        var firItems    = Array.from($(".fir-menu-item", true));
        var secItems    = Array.from($(".sec-menu-item", true));
        var secMenus    = Array.from($(".sec-menu-list", true));
        var keywords    = {
            firKey: "",
            secKey: ""
        };
        // 请求展示的商品数据...
        var datas = []; // 这个数据是ajax请求之后的数据
        // 过滤加载商品数据
        loadingGoodsList($(".goods-list"), datas, keywords);

        // 点击一级菜单
        firItems.forEach(function(firItem) {
            firItem.onclick = function(event) {   
                var index   = secMenus.indexOf(this.nextElementSibling);
                var secMenu = secMenus[index];
                // 更新过滤关键字
                keywords.firKey = this.textContent;
                keywords.secKey = "";
                // 如果存在二级菜单，则控制二级菜单显示与隐藏
                if(secMenu) {
                    if(secMenu.classList.contains("show")) {
                        removeClass(secMenus, "show");
                    }else {
                        removeClass(secMenus, "show");
                        secMenu.classList.add("show");
                    }
                }else {
                    // 过滤加载商品数据...
                    loadingGoodsList($(".goods-list"), datas, keywords);

                }
            }
        });
        // 点击二级菜单
        secItems.forEach(function(secItem) {
            secItem.onclick = function() {
                keywords.secKey = this.textContent;
                 // 过滤加载商品数据...
                 loadingGoodsList($(".goods-list"), datas, keywords);
            }
        })

    });
})();