const express = require("express");
const router = express.Router();
const getConnection = require("../mysqlConnection");

router.post("/login", (req, res) => {
    let config = {
        appid: "wxb6a294a344fa8469",
        secret: "6475c9fb54bb8667d5f329cf726cb121",
        code: req.body.code
    }
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${config.code}&grant_type=authorization_code`;
    // 引入node https模块
    let https = require("https");
    https.get(url, function (data) {
        let str = "";
        data.on("data", function (chunk) {
            str += chunk; //监听数据响应，拼接数据片段
        })
        data.on("end", function () {
            let {openid, session_key} = JSON.parse(str.toString());
            res.send({
                code: 200,
                data: {
                    username: openid,
                    session_key
                }
            });
        })
    })
});

module.exports = router;

// http://127.0.0.1:8888/commodities