// webpack.config.js
const config = {
    entry: './src/main.ts',
    output: { 
        filename: 'app.min.js', 
        path: __dirname +  '/dist'
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
        new HtmlWebpackPlugin({ template: '.src/index.html'})
    ]
};

module.exports = config;