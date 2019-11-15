const express = require("express");
const router  = express.Router();
const getConnection = require("../mysqlConnection");
const {host, port} = require("../server.config");

router.get("/", (req, res) => {
    // 获取参数
    let {kind, id} = req.query;
    let sql = "";
    let kinds  = ["clothes","pants","shoes","packages"];
    if(id) {
        sql = `SELECT * FROM commodities WHERE id = ${id}`;
    }else if(kinds.includes(kind)) {
        sql = `SELECT * FROM commodities WHERE kind = ?`;
    }else if(kind == "sale") {
        sql = `SELECT * FROM commodities WHERE sale = 1`;
    }else if(!kind) {
        sql = `SELECT * FROM commodities`;
    }else {
        res.send({
            code: "204",
            err: "参数有误",
            data: {}
        });
        return ;
    }
    const db = getConnection();
    db.connect();
    db.query(sql, [kind], (err, sqlRes) => {
        if(err) {
            console.log(err.message);
        }else {
            // 处理图片地址
            sqlRes.forEach(item => {
                item.imgUrl = `http://${host}:${port}/images/${item.imgUrl}.jpg`;
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


module.exports = router;

// http://127.0.0.1:8888/commodities