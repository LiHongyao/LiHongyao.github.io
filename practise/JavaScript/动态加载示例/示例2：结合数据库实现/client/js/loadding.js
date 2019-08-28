function loaddingPhoneList(data) {
    let htmlStr = "";
    let parent  = document.querySelector(".phone-list");
    data.forEach(phone => {
        htmlStr += `<li>
            <img src=${phone.imgUrl}>
            <p class="title">${phone.title}</p>
            <p class="desc">${phone.desc}</p>
            <span class="price">${phone.price}元</span>
            <span class="originPrice">${phone.originPrice}元</span>
        </li>`;
    });
    parent.innerHTML= htmlStr;
}