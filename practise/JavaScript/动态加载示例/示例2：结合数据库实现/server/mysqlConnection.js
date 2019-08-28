// 导入mysql模块
const mysql = require("mysql");
// 默认配置
const defaultOptions = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'db_test'
}
// 获取connection对象
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
// 导出getConnection
module.exports = getConnection;