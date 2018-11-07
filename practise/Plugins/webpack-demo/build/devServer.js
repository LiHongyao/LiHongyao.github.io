const path     = require('path');

exports.config = {
    contentBase:path.resolve(__dirname,'./dist'),
    host: 'localhost',
    port: '8081',
    open: true,
    inline: true,
    hot: true
}
