
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.config = [
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
    // 2. 处理LESS
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
];