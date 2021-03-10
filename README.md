## 使用

```shell
npx react-native init MyApp --template react-native-template-organize
```

## 使用的库

### 路由导航

- [react-navigation v5](https://reactnavigation.org/docs/getting-started)

  - @react-navigation/stack
- @react-navigation/bottom-tabs
  - react-native-safe-area-context

### 数据管理

- redux + react-redux

### 调试工具

- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)

  - 使用[redux-devtools](http://extension.remotedev.io/#usage)

    ```diff
    const store: Store = createStore(
      reducer,
    + global.window.__REDUX_DEVTOOLS_EXTENSION__?.()
    )
    ```

### 推荐的库

- 已安装
  - babel-plugin-root-import 路径别名
- 未安装
  - react-native-vector-icons



## TypeScript

基于react-native-template-typescript创建

```sh
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

0.0.5作为第一个版本，之前的版本都有问题，使用时请注意。但第一个版本只是初始化了typescript，并没有添加任何东西