// html文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// html 配置
module.exports = [
    // 编译主页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/index.html",
        // 指定脚本插入位置
        inject: "body",
        // 文件名(相对于output.path)
        filename: "index.html",
        // 包含模块
        chunks: ["main"]
    }),
    // 编译新闻页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/news.html",
        // 指定脚本插入位置
        inject: "body",
        // 文件名(相对于output.path)
        filename: "static/pages/news.html",
        // 包含模块
        chunks: ["news"]
    }),
    // 编译关于页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/about.html",
        // 指定脚本插入位置
        inject: "body",
        // 文件名(相对于output.path)
        filename: "static/pages/about.html",
        // 包含模块
        chunks: ["about"]
    })
];
