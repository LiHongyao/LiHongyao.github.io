// 模块引入
const webpack = require('webpack');
const path    = require('path');
// 引入插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// 导出配置
module.exports = {
    // 打包模式
    mode: 'production',
    // 入口
    entry: {
        'main': './src/js/index.js',
        'news': './src/js/news.js'
    },
    // 出口
    output: {   
        // 路径
        path: path.resolve(__dirname, "./dist/"),
        // 文件名
        filename: 'static/js/[name]-bundle-[hash].js',
        publicPath: "http://localhost:8081/"
    },
    // 加载器
    module: {
        // 加载规则
        rules: [
            // 1. ES6->ES5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 2. 处理less
            {
                test: /\.less/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: ["last 2 versions"]
                                    }),
                                ]
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            // 3. 处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: "1024",
                        name: "[name]-[hash].[ext]",
                        outputPath: "static/images/"
                    }
                }
            },
            // 4. 处理HTML中的图片
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            }
        ] 
    },
    // 插件
    plugins: [
        // 创建插件实例
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
    ],
    // 服务和热更新
    devServer: {
        contentBase:path.resolve(__dirname,'./dist'),
        host: 'localhost',
        port: '8081',
        open: true,
        inline: true,
        hot: true
    },
    // 优化
    optimization: {
        minimizer: [
            // 丑化JS
            new UglifyJsPlugin({
                uglifyOptions: {
                    // 是否压缩
                    compress: true
                }
            })
        ]
    },
    // 取别名
    resolve: {
        alias: {
            "index-less": path.resolve(__dirname, './src/less/index.less')
        }
    }
};











