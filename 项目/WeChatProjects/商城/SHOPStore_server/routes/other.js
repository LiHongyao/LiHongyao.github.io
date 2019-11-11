const express = require("express");
const router  = express.Router();
const getConnection = require("../mysqlConnection");
const {host, port} = require("../server.config");

router.get("/banner", (req, res) => {
    let data = [];
    for(let i = 1; i < 5; i++) {
        data.push(`http://${host}:${port}/images/flash-${i}.jpg`)
    }
    res.send({
        code: "200 ok",
        err: "",
        data
    });
});


module.exports = router;

// http://127.0.0.1:8888/commodities