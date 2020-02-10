const Koa = require('koa');
const router = require('./router');
const app = new Koa();
const { host, port } = require('./config');

// => 处理跨域
const cors = require('koa2-cors');
app.use(cors());
// => 中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
// => 处理路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`);
});