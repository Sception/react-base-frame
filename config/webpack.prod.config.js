const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
    mode:'production',
    entry:path.resolve(__dirname,'../src/index.js'),
    output:{
        filename: "bundle.js",
        path:path.resolve(__dirname,'../build')
    },
    module: {
        rules: [
            {
                test:/\.js|jsx$/,
                loader:'babel-loader',
                include:path.resolve(__dirname,'../src'),
                exclude:/(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        alias: {
            src:path.resolve(__dirname,'../src'),
            views:path.resolve(__dirname,'../src/views')
        },
        extensions: ['.js', '.jsx', '.less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'React-Base-Frame',
            template:path.resolve(__dirname,'../public/index.html'),
            filename:path.resolve(__dirname,'../build/index.html'),
            inject:'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    optimization:{
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress:false
                }
            })
        ]
    }
}

module.exports = config