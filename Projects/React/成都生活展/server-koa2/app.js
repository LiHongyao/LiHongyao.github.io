const Koa = require('koa');
const router = require('koa-router')(); // 注意：引入的方式
const app = new Koa();
const jwt = require('jsonwebtoken');
const cypto = require('crypto'); // 加密
// => 处理跨域
const cors = require('koa2-cors');
app.use(cors());
// => 中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
// => 处理路由
router.post('/login', async (ctx) => {
    const usr = ctx.request.body;
    const {username} = usr;
    // 将用户名在数据库中进行比对，如果存在并参数正确则创建对应的token
    // 这里假设用户无误
    // expirseIn 有效时长
    const token = jwt.sign({username}, 'secret', { expiresIn: '10s' });
    ctx.body = JSON.stringify({
        success: true,
        token
    });
});
router.get('/info', async (ctx) => {
    let token =  ctx.request.header.authorization;
    // 验证
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            console.log(err.message)
            ctx.body = JSON.stringify({
                success: false,
                message: 'Token 无效或已过期！'
            });
            return;
        }
        // 通过
        ctx.body = JSON.stringify({
            user: '通过'
        })
    })
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});