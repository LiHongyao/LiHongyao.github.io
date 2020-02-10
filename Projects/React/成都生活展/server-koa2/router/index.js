const router = require('koa-router')();
const user = require('./user');
const info = require('./info');

router.use(user);
router.use(info);

module.exports = router;