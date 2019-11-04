const webpack = require("webpack");
const htmlConfig = require("./html.config");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
    ...htmlConfig,
    new CleanWebpackPlugin(), 
    new ExtractTextPlugin("static/css/[name]-[hash:5].css"),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
    }),
    new webpack.ProvidePlugin({
        $:"jquery"
    }),
    new webpack.BannerPlugin("RIMI Teaching demo!"),
    new webpack.HotModuleReplacementPlugin()
]
