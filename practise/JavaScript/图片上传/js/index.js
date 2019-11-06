function imgPreview(fileDom) {
    // 判断是否支持FileReader
    let reader = null;
    if(window.FileReader) {
        reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        return;
    }
    let file = fileDom.files[0];
    let imageType = /^image\//;
    // 判断是否是图片
    if(!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    // 读取完成
    reader.onload = function(e) {
        //图片路径设置为读取的图片
        // img.src = event.target.result;
        console.log()
        let box = document.querySelector(".box");
        // // 回显图片
        box.style.backgroundImage = `url(${e.target.result})`;
    }
    // 读取图片
    reader.readAsDataURL(file);
}

function uploadImage() {
    let file = document.querySelector("input").files[0];
    let formData = new FormData();
    formData.append("photo", file, "goods.jpg");
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8800/up_image", true);
    xhr.send(formData);
    xhr.onload = function(res) {
        console.log(res);
    }
}