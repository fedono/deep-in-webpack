const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/CopyrightWebpackPlugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'first.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './loaders/mondayLab.js'),
                        options: {
                            name: 'jackcc'
                        }
                    }
                ],
                
            }
        ]
    },
    plugins: [
        new CopyrightWebpackPlugin({
            name: 'monday'
        })
    ]
}