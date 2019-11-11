function imgPreview(fileDom) {
    // 判断是否支持FileReader 
    let reader = null;
    if(window.FileReader) {
        reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        return;
    }
    // 获取选中的文件
    let file = fileDom.files[0];
    // 判断是否是图片类型
    let imageType = /^image\//;
    if(!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    // 读取完成
    reader.onload = function(e) {
        // 图片路径设置为读取的图片
        // img.src = e.target.result;
        let box = document.querySelector(".box");
        // 回显图片
        box.style.backgroundImage = `url(${e.target.result})`;
    }
    // 读取图片 => 将图片转换成base64
    reader.readAsDataURL(file);
}

function uploadImage() {
    let file = document.querySelector("input").files[0];
    if(!file) {
        alert("点击上方方框选择图片！");
        return;
    }
    let formData = new FormData();
    formData.append("photo", file);
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8800/up_image", true);
    xhr.send(formData);
    xhr.onload = function(res) {
        console.log(res);
    }
}