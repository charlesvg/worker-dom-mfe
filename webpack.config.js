const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.mjs',
        worker: './src/worker.mjs',
        app: './src/app.js'
    },
    mode: 'development',
    devServer: {
        static: './dist',
    },
    output: {
        filename: (pathData) => {
            return pathData.chunk.name === 'app' ? '[name].js' : '[name].mjs';
        },
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: 'src/index.html'
        })
    ]
};