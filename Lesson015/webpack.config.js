const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: './JS/index.js',
        analytics: './JS/analytics.js'
    },
    output: {
        filename: '[name].[id].js',
        path: path.resolve(__dirname, 'distr')
    },
    resolve: {
        alias: {
            '@homeworks': path.resolve(__dirname, "../..")
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader',
            }]
    }
}