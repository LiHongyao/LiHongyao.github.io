// 1. 导入express/http
const express = require("express");
const { host, port } = require("./http");
// 2. 创建express实例
const app = express();
// 3. 处理跨域
// => CROS 跨域
app.all("*", (req, res, next) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  // 让options尝试请求快速结束
    else
        next();
});

// 4. 静态资源 
app.use(express.static("www"));
// 5. 中间件
const bodyParser = require("body-parser");
// application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({ extended: false }));
// application/json 解析
app.use(bodyParser.json());
// 6. 处理路由
const router = require("./router/index");
app.use("/", router);

// 7. 监听 
app.listen(port, "0.0.0.0");
// 8. 打印输出提示信息
console.log(`server running at http://${host}:${port}`);