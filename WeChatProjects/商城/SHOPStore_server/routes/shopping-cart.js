const express = require("express");
const router = express.Router();
const getConnection = require("../mysqlConnection");
const { host, port } = require("../server.config");

router.get("/", (req, res) => {
    // 获取请求参数
    let { username } = req.query;
    // 异常处理
    if (!username) {
        res.send({
            code: 202,
            err: "缺失必要参数 => username",
            data: []
        })
        return;
    }
    let sql = `SELECT * FROM shopping_cart WHERE username = ?`;
    let db = getConnection();
    db.connect();
    db.query(sql, [username], (err, sqlRes) => {
        if (err) {
            res.send({
                code: 500,
                err: err.message,
                data: []
            })
        } else {
            sqlRes.forEach(item => {
                item.imgUrl = `http://${host}:${port}/images/${item.imgUrl}`;
            });
            res.send({
                code: "200 ok",
                err: "",
                data: sqlRes
            });
        }
    })
    db.end();
});

router.post("/insert", (req, res) => {
    let keys = ["username", "imgUrl", "title", "num", "price", "des", "total", "color", "size"];
    let { list } = req.body;
    // 异常处理
    if (!list || list.length < 0) {
        res.send({
            code: 202,
            err: "缺失必要参数 => list 或购物车数据为空！",
            data: []
        })
        return;
    }
    // 数据处理
    let values = [], arr = [];
    for (let i = 0, len = list.length; i < len; i++) {
        for (let key of keys) {
            arr.push(list[i][key]);
        }
        values.push(arr);
        arr = [];
    }
    let username = list[0].username;
    const sql = "INSERT INTO shopping_cart (username,imgUrl,title,num,price, des,total,color,size)  VALUES ?";
    const db = getConnection();
    db.connect();
    db.query("DELETE FROM shopping_cart WHERE username = ?", [username], (err, sqlRes) => {
        if(!err) {
            db.query(sql, [values], (err, sqlRes) => {
                if (err) {
                    console.log(err.message);
                    res.send({
                        code: 500,
                        err: err.message,
                        data: []
                    })
                } else {
                    res.send({
                        code: "200 ok",
                        message: "添加成功！"
                    })
                }
                db.end();
            });
        }
    })
   

});

module.exports = router;

// http://127.0.0.1:8888/commodities


