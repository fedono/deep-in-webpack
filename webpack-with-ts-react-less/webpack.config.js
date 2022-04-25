const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: ["/node_modules"]
            },
          {
            test: /\.(less)$/,
            exclude: ["/node_modules"],
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]--[hash:base64:15]'
                  },
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    sourceMap: true,
                    javascriptEnabled: true,
                    cssModules: true,
                  }
                }
              }
            ]
          },
          {
            test: /\.(less)$/,
            include: ["/node_modules"],
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    sourceMap: true,
                    javascriptEnabled: true,
                    cssModules: true,
                  }
                }
              }
            ]
          }
        ]
    },
  devServer: {
      static: './dist',
    port: 8080
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}