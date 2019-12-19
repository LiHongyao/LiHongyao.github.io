let btn = document.querySelector("button");
let res = document.querySelector(".res");
let _isRunning = false;
let _timer = null;
btn.onclick = function() {
    _isRunning = !_isRunning;
    btn.textContent = _isRunning ? "停止抽奖" : "开始抽奖";
    if(_isRunning) {
        t = setInterval(() => {
            res.textContent = randomName(NAMES);
        }, 15);
    }else {
        clearInterval(t);
    }
}

