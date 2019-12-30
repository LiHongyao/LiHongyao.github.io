let btn = document.querySelector(".button");
let res = document.querySelector(".res");
let _isRunning = false;
let _timer = null;
let _source = [];
let _index = 0;
// 名单集合
for(let i = 1; i <= 50; i++) {
    let num = i < 10 ? `0${i}` : i;
    _source.push(`NO.000${num}`);
}
console.log(_source);
btn.onclick = function() {
    _isRunning = !_isRunning;
    btn.textContent = _isRunning ? "停止抽奖" : "开始抽奖";
    if(_isRunning) {
        t = setInterval(() => {
            index = Math.floor(Math.random() * _source.length);
            res.textContent = _source[index];   
        }, 15);
    }else {
        clearInterval(t);
        _source.splice(index, 1);
    }
}

