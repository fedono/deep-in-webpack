# webpack 与 react 的配置

单独配置 react 的配置需要怎么配置

- 首先需要解析 react 的 jsx 语法
    - 在 `webpack.config.js` 中配置解析`js`文件，需要`yarn add babel-loader` 
      ```js
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
      ```
    - 使用`babel-loader`需要安装相关的依赖 `@babel/core @babel/preset-env`
    - 然后在项目根目录创建`.babelrc.js`，配置如下
    ```js
    module.exports = {
        "presets": ["@babel/preset-react", "@babel/preset-env"]
    }
    ```