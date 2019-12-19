// 用户模型

const Sequelize = require( 'sequelize' );
const modelGlobal = require( './model.global' );

class User extends Sequelize.Model {}
User.init( {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
}, {
  modelName: 'user',
  ...modelGlobal
} );

module.exports = User;
