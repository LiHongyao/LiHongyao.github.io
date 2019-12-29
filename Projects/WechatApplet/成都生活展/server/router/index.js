const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/home", (req, res) => {
    let file = path.join(__dirname, "../model/home.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
});
router.get("/recommend", (req, res) => {
    let file = path.join(__dirname, "../model/recommend.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
});
router.get("/scenic-spot", (req, res) => {
    let file = path.join(__dirname, "../model/scenic-spot.json");
    fs.readFile(file, "utf-8", (err, data) => {
        res.end(data);
    });
});
module.exports = router;