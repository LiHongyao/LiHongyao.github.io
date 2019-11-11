
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        chunks: ["main"],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        inject: true,
        chunks: ["news"],
        filename: "static/pages/news.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        inject: true,
        chunks: ["about"],
        filename: "static/pages/about.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/social.html",
        inject: true,
        chunks: ["social"],
        filename: "static/pages/social.html"
    })
]

