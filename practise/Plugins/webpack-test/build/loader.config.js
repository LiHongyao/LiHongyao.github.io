// 抽离CSS
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    rules: [
        // es6 -> es5
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
        // 处理css
        {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                require("autoprefixer")({
                                    browsers: ["last 2 versions"]
                                }),
                            ]
                        }
                    },
                    "less-loader"
                ]
            })
        },
        // 处理图片
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            exclude: /node_modules/,
            use: {
                loader: "url-loader",
                options: {
                    limit: "1024",
                    name: "[name].[ext]",
                    outputPath: "static/images/"
                }
            }
        },
        // 处理html
        {
            test: /\.html/,
            exclude: /node_modules/,
            loader: "html-loader"
        }
    ]
}


