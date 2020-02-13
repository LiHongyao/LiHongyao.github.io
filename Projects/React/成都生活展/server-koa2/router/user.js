// => 导入路由模块
const router = require('koa-router')();
const jwt = require('jsonwebtoken');
// => 处理路由
router.post('/login', async (ctx) => {
    console.log(`「登录接口」 被调用！`)
    const usr = ctx.request.body;
    const { username, password } = usr;
    if (!username || !password) {
        ctx.body = JSON.stringify({
            status: 201,
            errMsg: 'login：Miss the username or password params!'
        });
    } else if (username === 'admin' && password === '123') {
        const token = jwt.sign({ username }, 'secret', { expiresIn: '10s' });
        ctx.body = JSON.stringify({
            status: 200,
            token,
            user: {
                name: 'Muzili',
                autograph: '曾经沧海难为水，除却巫山不是云。'
            }
        });
    } else {
        ctx.body = JSON.stringify({
            status: 202,
            errMsg: 'login：Wrong account or password! '
        });
    }
});
router.post('/auth', async (ctx) => {
    console.log(`「授权接口」 被调用！`)
    let token = ctx.request.header.authorization;
    console.log(token)
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            console.log(err.message)
            ctx.body = JSON.stringify({
                success: false,
                message: 'Token 无效或已过期！'
            });
            return;
        }
        ctx.body = JSON.stringify({
            success: true,
            token,
            user: {
                name: 'Muzili',
                autograph: '曾经沧海难为水，除却巫山不是云。'
            }
        });
    })
});
// => 导出路由配置
module.exports = router.routes();