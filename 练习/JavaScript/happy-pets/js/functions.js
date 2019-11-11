// 加载菜单模块
function loadingMenus(model) {
    // 遍历菜单数据加载页面元素
    // forEach()数组遍历方法
    var htmlStr = ``;
    model.menu.forEach((title) => {
        htmlStr += 
            `<li>
                <a href="javascript:;">${title}</a>
            </li>`;            
    });
    // 在指定元素上呈现内容
    $('.menu-list').html(htmlStr);
}

// 加载关于模块
function loadingAbout(model) {
    var htmlStr = "";
    model.about.forEach((item, index) => {
        htmlStr +=
            `<section class="ct-r-item">
                <div class="list-num flex-row-col-cen">${'0' + (index + 1)}</div>
                <div class="infos">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            </section>`
    });
    $(".about .ct-r").html(htmlStr);
}

// 加载团队模块
function loadingTeam(model) {
    var htmlStr = "";
    model.team.forEach((item) => {
        htmlStr += 
            `<li>
                <img src="./images/${item.img}">
                <div class="infos">
                    <p class="name">${item.name}</p>
                    <p class="des">${item.des}</p>
                </div>
            </li>`
    })
    $(".team .menmber-list").html(htmlStr);
}

// 加载服务模块
function loadingServices(model){
    var htmlStr = "";
    model.services.forEach((item) => {
        htmlStr += 
            `<li>
                <img src="./images/${item.img}">
                <h3>${item.title}</h3>
                <p>${item.des}</p>
            </li>`
    });
    $('.services .ct-list').html(htmlStr);
} 
// 加载新闻模块
function loadingNews(model) {
  var newsHtmlStr = "";
  model.news.forEach((item) => {
      newsHtmlStr += 
          `<section class="news-item">
              <h1 class="title">${item.title}</h1>
              <h3>${item.subTitle}</h3>
              <p>${item.content}</p>
              <span class="more-btn">Read More</span>
          </section>`
  });
  $(".news").html(newsHtmlStr);  
}

// 加载gallery
function loadingGallery(model) {
    var htmlStr = "";
    model.gallery.forEach((imgName) => {
        htmlStr += `<img src='./images/${imgName}'>`
    });
    $(".gallery").html(htmlStr);
}