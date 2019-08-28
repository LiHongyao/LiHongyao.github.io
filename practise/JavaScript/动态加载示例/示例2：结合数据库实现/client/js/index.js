// 1. 请求数据
fetch("http://127.0.0.1:8081/phone")
.then(response => response.json()) 
.then(data => {
    console.log(data);
    loaddingPhoneList(data);
})