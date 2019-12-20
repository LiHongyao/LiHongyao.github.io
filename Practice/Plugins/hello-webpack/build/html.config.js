// -> 处理Html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // —> 主页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/index.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "index.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["main"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> 登录注册
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/login-register.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/login-register.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["loginRegister"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
]