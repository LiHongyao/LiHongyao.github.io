// loader module

// -> 抽离css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    // 编译es语法
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    },
    // 编译less
    {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
            "style-loader",
            // => 使用插件中的loader代替style方式
            /*
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    reloadAll: true
                }
            },*/
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    plugins: [require("autoprefixer")]
                }
            },
            "less-loader"]
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    // 处理HTML
    {
        test: /\.html$/,
        use: "html-loader"
    },
    // 处理图片
    {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        exclude: /node_modules/,
        use: {
            loader: "url-loader",
            options: {
                // <= 2kb，则转换成base64
                limit: 10000,
                // 图片名字
                name: "[name]-[hash:5].[ext]",
                // 输出路径
                outputPath: "static/images/",
                // 启用commonJS规范  
                esModule: false
            }
        }
    },
    // 处理字体
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
            loader: 'url-loader',
            options: {
                name: '[name]-[hash:5].[ext]',
                limit: 5000,
                outputPath: 'static/fonts/'
            }
        }]
    }
]