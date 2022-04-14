const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        static: './dist',
        port: 8081,
        proxy: {
            '/api': {
                target: 'https://randomuser.me',
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}