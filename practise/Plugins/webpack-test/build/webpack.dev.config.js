const loaderConfig  = require("./loader.config");
const pluginsConfig = require("./plugins.config");
const path    = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    // 映射文件
    devtool: "eval-source-map",
    // 配置上下文
    context: path.resolve(__dirname, "../"),
    // 配置打包模式
    mode: "development",
    // 配置入口
    entry: {
        "main":"./src/js/index.js",
        "news":"./src/js/news.js",
        "about":"./src/js/about.js"
    },
    // 配置出口
    output: {
        // 打包路径
        path: path.resolve(__dirname, "../dist/"),
        // 打包文件名称
        filename: "static/js/[name]-bundle.js",
        // 处理静态资源路径
        publicPath: "http://localhost:8081/"
    },
    // 配置插件
    plugins: pluginsConfig,
    // 配置loader
    module: loaderConfig,
    // 路径解析
    resolve: {
        // 取别名
        alias: {
            "index-style": path.resolve(__dirname, '../src/less/index.less')
        }
    },
    // 配置开发服务 & 热更新
    devServer: {
        contentBase: path.resolve(__dirname, "../dist/"),
        port: 8081,
        host: "localhost",
        open: true,
        inline: true,
        hot: true
    },
    // 优化
    optimization: {
        minimizer: [
            // 丑化JS
            new UglifyJsPlugin({
                test: /\.js$/,
                exclude: /node_modules/,
                uglifyOptions: {
                    // 是否压缩
                    compress: true
                }
            })
        ]
    }
}

