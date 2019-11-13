// 1. 获取图片路径
let smallUrlList = [], bigUrlList = [];
for(let i = 0; i < 10; i++) {
    smallUrlList.push(`https://game.gtimg.cn/images/lol/act/img/skin/small100${i}.jpg`);
    bigUrlList.push(`https://game.gtimg.cn/images/lol/act/img/skin/big100${i}.jpg`);
}
// 2. 处理数据
let hero = {
    nikename: "黑暗之女",
    name: "安妮",
    postion: "法师",
    infos: [
        {text: "物理攻击", value: "30%", color: "#f2c500"},
        {text: "魔法攻击", value: "100%", color: "#f59d00"},
        {text: "防御能力", value: "45%", color: "#2c97de"},
        {text: "上手难度", value: "65%", color: "#1eca6b"}
    ]
}
// 3. 加载图片
let slides    = document.querySelector(".slides");
let slidesStr = "";
bigUrlList.forEach(src => {
    slidesStr += `<img src=${src} alt="loadding err">`;
})
slides.innerHTML =  slidesStr;

// 4. 加载缩略图
let thumbnail = document.querySelector(".thumbnail");
let thumbnailStr = "";
smallUrlList.forEach((src, index) => {
    thumbnailStr += `<div class='item ${index == 0 ? "sel" : ""}' style="background:url('${src}')"></div>`;
})
thumbnail.innerHTML = thumbnailStr;
// 5. 加载英雄信息
let infos = document.querySelector(".infos");
infos.innerHTML = `
    <p class="nikename">${hero.nikename}</p>
    <p class="name">${hero.name}</p>
    <p class="position">${hero.postion}</p>
    <div class="values">${(() => {
        let htmlStr = "";
        hero.infos.forEach(info => {
            htmlStr += `<section class="item">${info.text}<span class="value" style="background:linear-gradient(to right, ${info.color} ${info.value}, #363c3c ${info.value})"></span></section>`;
        })
        return htmlStr;
    })()}</div>
    <div class="buy-btn">购买英雄</div>`;
// 4. 交互
let smallImgs = [...document.querySelectorAll(".thumbnail .item")];
let last_sel_index = 0;
smallImgs.forEach(item => {
    item.onclick = function() {
        let index = smallImgs.indexOf(this);
        smallImgs[last_sel_index].classList.remove("sel");
        this.classList.add("sel");
        slides.style.transform = `translateX(-${index * 1000}px)`;
        last_sel_index = index;
    }
})
