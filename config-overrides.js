const { override, addLessLoader, fixBabelImports  } = require( './libs/customize-cra/index.cjs.js' );

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader( {
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]'
  } ),
)