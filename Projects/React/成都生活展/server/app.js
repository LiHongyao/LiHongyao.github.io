// 引入模块
const http = require("http");

// 创建服务
http.createServer((req, res) => {
    // 设置跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    res.writeHead(200, {"Content-Type":"text/plain;charset=utf-8"});
    // 过滤空请求
    if(req.url === "/favicon.ico") return;
    console.log(req.url);
    // 响应数据
    res.end("嗨，我是用nodeJS创建的一个服务器。");
}).listen(8081, "127.0.0.1");


console.log("server running at https://127.0.0.1:8081");