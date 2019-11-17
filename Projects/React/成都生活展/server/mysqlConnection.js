const mysql = require("mysql");
const defaultOptions = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "123",
    database: "CDLifeShow"
}
const getConnection = (options = defaultOptions) => {
    return mysql.createConnection(options);
}

module.exports = getConnection;