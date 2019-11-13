

// 1. 获取元素
let btn  = document.querySelector(".btn");
let bulb = document.querySelector(".bulb");
// 2. 点击按钮
bulb.state = false; // 为开关绑定一个状态
btn.onclick = function() {
    this.state = !this.state;
    this.textContent = this.state ? "关灯" : "开灯";
    bulb.src = this.state ? "./images/on.png" : "./images/off.png";
}