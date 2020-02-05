// 引入模块
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const router = require("./router");

// 创建服务
http.createServer((req, res) => {
    // 跨域处理
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === "/favicon.ico") return;
    // 获取请求路径
    let {pathname, query} =  url.parse(req.url, true); 
    // 处理图片
    let extname = path.extname(pathname);
    if(/\.(jpg|jpeg|png|svg|gif)$/.test(extname)) {
        res.writeHead(200, {"Content-Type":`image/${extname.slice(1)};charset=utf-8`});
        pathname = __dirname + pathname;
        fs.exists(pathname, (exists) => {
            if(exists) {
                fs.readFile(`${pathname}`, (err, data) => {
                    if(err) 
                        console.log(err.message)
                    else
                        res.end(data);
                });
            }else {
                console.log("文件不存在！");
            }
        })  
    } else {
        let args = {
            method: req.method,
            pathname,
            query,
            res
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        // 处理路由
        router({...args});
    }
    // 响应数据
}).listen(8081, "0.0.0.0");

console.log("server running at http://127.0.0.1:8081"); 