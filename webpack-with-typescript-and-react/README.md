# webpack 与 typescript/react 的打包

- 增加 ts 的支出
    - 增加`ts-loader`，然后在`tsconfig.js` 中配置如下
    ```JSON
    {
      "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "module": "es6",
        "target": "es5",
        "moduleResolution": "Node",
        "allowJs": true
      },
      "files": ["src/index.tsx"],
        "exclude": ["./node_modules/**/*"]
    }

    ```
    - webpack 的配置增加如下
    ```js
    {
        test: /\.(ts)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"]
      },
    ```
- 引入 react 应用后，需要解析 jsx 的格式
    - 在 `tsconfig.js`中增加如下配置
    ```js
    "jsx": "react"
    ```
    - 修改 `webpack.config.js` 中 ts 的配置，增加 `tsx` 的解析
    ```js
    {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ```