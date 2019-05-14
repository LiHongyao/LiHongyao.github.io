// 引入插件
const webpack = require("webpack");
// 剥离CSS
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 压缩CSS
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 清除文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
// html配置
const HtmlConfig = require("./html.config");
// 清除未使用的css（必须结合ExtractTextPlugin插件使用）
const path = require("path");
const glob = require("glob");
const PurifyCSSPlugin = require('purifycss-webpack');
// 转移文件
const CopyWebpackPlugin = require("copy-webpack-plugin");



module.exports = [
    // 模块热替换
    new webpack.HotModuleReplacementPlugin(),
    // 版权声明
    new webpack.BannerPlugin("版权归‘耀哥’所有，翻版必究"),
    // 剥离CSS
    new ExtractTextPlugin("static/css/[name].min.css"),
    // 压缩CSS
    // new OptimizeCssAssetsPlugin(),
    // 清除文件
    new CleanWebpackPlugin(),
    // 清除未使用的CSS
    new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, "../src/*.html")),
    }),
    // 转移文件
    new CopyWebpackPlugin([
        {
            from:"./src/json/",
            to: "./static/json/"
        }
    ]),
    // 引入三方插件
    new webpack.ProvidePlugin({
        $:"jquery"
    }),
    // 编译页面
    ...HtmlConfig
]
