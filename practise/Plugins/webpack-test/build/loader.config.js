const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    // babel
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
    // less
    {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    plugins: [
                        require("autoprefixer")
                    ]
                }
            }, "less-loader"]
        })
    },
    // 处理图片
    {
        test: /\.(jpg|jpeg|svg|png)$/,
        exclude: /node_modules/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name]-[hash:5].[ext]",
                outputPath: "static/images/"
            }
        }
    },
    // 处理HTML
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
    }
];