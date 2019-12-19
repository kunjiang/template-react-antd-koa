// 在测试下使用的数据在上线是需要全部清除, 相当于初始化操作

// const Sequelize = require( 'sequelize' );

const mysqlConnect = require( './mysql-connect' );

require( '../model/model.user' );

init();

async function init() {
  try {
    await mysqlConnect.sync( { force: true } )
    console.log( '>>> 数据库初始化成功 ...' );
  } catch ( ex ) {
    console.error( '>>> 数据库初始化失败: ', ex );
  }
}