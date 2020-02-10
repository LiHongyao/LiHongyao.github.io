// => 导入路由模块
const router = require('koa-router')();
const fs = require("fs");
const path = require("path");
// => 处理路由
router.get('/info', async (ctx) => {
    console.log('「数据接口」被调用！');
    const { type } = ctx.query;
    const types = ['home', 'scenicSpot', 'recommend'];
    if (!type || types.indexOf(type) === -1) {
        ctx.body = JSON.stringify({
            status: 201,
            errMsg: "参数type不存在或者type参数错误！"
        });
    } else {
        let filePath = path.join(__dirname, `../model/${type}.json`);
        await new Promise((resolve) => {
            fs.exists(filePath, (flag) => {
                if (flag) {
                    fs.readFile(filePath, "utf-8", (err, data) => {
                        if (err) ctx.throw(err);
                        resolve(JSON.parse(data));
                    });
                } else {
                    throw new Error(console.log('文件不存在！'));
                }
            })

        }).then((data) => {
            ctx.body = JSON.stringify({
                status: 200,
                data
            });
        })
    }
});

// => 导出路由配置
module.exports = router.routes();