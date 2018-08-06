// ./build/webpack.base.conf.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['./src/main.js'],
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};

module.exports = config;