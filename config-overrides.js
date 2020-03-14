const { addDecoratorsLegacy, override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

const path = require("path");
module.exports = override(
  // 添加装饰器
  addDecoratorsLegacy(),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 配置主题颜色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
    // "@": path.resolve(__dirname, "src") 可以配置多个别名

  })
);