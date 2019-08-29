/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router  = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
router.post("/register", (req, res) => {
    let {username, password, tel, email} = req.body;
    let sqlParams = [username, password, tel, email];
    let sql = "INSERT INTO user (username, password, tel, email) VALUES (?,?,?,?)";
    let db = getConnection();
    db.connect();
    db.query(sql, sqlParams, (err, sqlRes) => {
        if(err) {
            // 用户已存在
            res.send({
                status: "201",
                errMsg: "用户已存在"
            })
        }else {
            res.send({
                status: "200",
                user: req.body
            })
        }
    })
    db.end();
})
router.post("/login", (req, res) => {
    let {username, password} = req.body;
    let sqlParams = [username];
    let sql = "SELECT * FROM user WHERE username = ?";
    let db = getConnection();
    db.connect();
    db.query(sql, sqlParams, (err, sqlRes) => {
        if(sqlRes.length == 0) {
            res.send({
                status: "202",
                errMsg: "用户不存在"
            })
        }else {
            let user = sqlRes[0];
            if(username == user.username && password == user.password) {
                delete user.password;
                res.send({
                    status: "200",
                    user
                })
            }else {
                res.send({
                    status: "203",
                    errMsg: "密码错误"
                })
            }
        }
    })
    db.end();

});


// 4. 导出路由
module.exports = router;




