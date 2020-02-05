const fs = require("fs");
const path = require("path");
/**
 * 路由参数
 * req：请求对象
 * res：响应对象
 * method：请求方法
 * @param {*} args 
 */
function router(args) {
    let { method, pathname, query, res } = args;
    // 处理GET
    if (method == "GET") {
        switch (pathname) {
            case "/home": resHome(res); break;
            case "/scenic-spot": resScenicSpot(res); break;
            case "/recommend": resRecommend(res); break;
            default: {
                res.end(JSON.stringify({
                    code: 404,
                    errMsg: "接口不存在！"
                }))
            }
        }
    }
    // 处理POST
    else if (method == "POST") {
        switch (pathname) {
            case "/login": {

            }break;
            case "/register": {

            }break;
            default: {
                res.end(JSON.stringify({
                    code: 404,
                    errMsg: "接口不存在！"
                }))
            }
        }
    }

}

// => 读取主页数据
function resHome(res) {
    let file = path.join(__dirname, "../model/home.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
}
// => 读取景点数据
function resScenicSpot(res) {
    let file = path.join(__dirname, "../model/scenic-spot.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
}
// => 读取推荐数据
function resRecommend(res) {
    let file = path.join(__dirname, "../model/recommend.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
}
module.exports = router;