const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

exports.config =  [
    // 1. 添加横幅
    new webpack.BannerPlugin('版权归耀哥所有，翻版必究！'),
    // 2. 分离CSS文件
    new ExtractTextPlugin('static/css/[name]-[hash].css'),
    // 3. 压缩CSS
    new OptimizeCssAssetsPlugin(),
    // 4. 模块热替换
    new webpack.HotModuleReplacementPlugin(),
    // 5. 清空文件
    new CleanWebpackPlugin(['./dist/']),
    // 6. 全局引入三方库
    new webpack.ProvidePlugin({
        $: "jquery"
    }),
    // 7. 处理HTML
    // 主页
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['main'],
        filename: 'index.html'
    }),
    // 新闻页
    new HtmlWebpackPlugin({
        template: './src/pages/news.html',
        inject: true,
        chunks: ['news'],
        filename: 'static/pages/news.html'
    }),
]