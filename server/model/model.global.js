// 模型全局配置

const mysqlConnect = require( '../database-init/mysql-connect' );


module.exports = {
  paranoid: true,
  sequelize: mysqlConnect,
  createdAt: 'create_at',
  updatedAt: 'update_at',
  deletedAt: 'delete_at',
};