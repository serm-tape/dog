const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
	],
    devServer:{
        publicPath: '/build/',
        contentBase: [__dirname, path.join(__dirname, 'public')],
        historyApiFallback: true,
        compress: true,
        port: 8080,
    }
}