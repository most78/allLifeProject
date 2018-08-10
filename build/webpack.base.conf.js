// ./build/webpack.base.conf.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['./src/main.js'],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.ts?$/, 
                exclude: /node_modules/, 
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};

module.exports = config;